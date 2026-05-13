import { getDbConnection } from "@/lib/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

async function verifyAuth() {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token")?.value;
  if (!token) return null;
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (e) {
    return null;
  }
}

export async function GET() {
  if (!(await verifyAuth())) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  let connection;
  try {
    connection = await getDbConnection();
    const [rows] = await connection.execute("SELECT id, name, email, created_at FROM admins ORDER BY created_at DESC");
    return Response.json({ status: "success", data: rows });
  } catch (error) {
    return Response.json({ error: "Failed to fetch users" }, { status: 500 });
  } finally {
    if (connection) await connection.end();
  }
}

export async function POST(request) {
  if (!(await verifyAuth())) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { name, email, password } = await request.json();

    if (!name || !email || !password) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

    const connection = await getDbConnection();
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      await connection.execute(
        "INSERT INTO admins (name, email, password) VALUES (?, ?, ?)",
        [name, email, hashedPassword]
      );
      return Response.json({ status: "success", message: "User created successfully" });
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        return Response.json({ error: "Email already exists" }, { status: 400 });
      }
      throw error;
    } finally {
      await connection.end();
    }
  } catch (error) {
    console.error("Create User Error:", error);
    return Response.json({ error: "Failed to create user" }, { status: 500 });
  }
}

export async function PUT(request) {
  if (!(await verifyAuth())) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id, name, email, password } = await request.json();

    if (!id || !name || !email) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

    const connection = await getDbConnection();
    try {
      if (password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        await connection.execute(
          "UPDATE admins SET name = ?, email = ?, password = ? WHERE id = ?",
          [name, email, hashedPassword, id]
        );
      } else {
        await connection.execute(
          "UPDATE admins SET name = ?, email = ? WHERE id = ?",
          [name, email, id]
        );
      }
      return Response.json({ status: "success", message: "User updated successfully" });
    } finally {
      await connection.end();
    }
  } catch (error) {
    return Response.json({ error: "Failed to update user" }, { status: 500 });
  }
}

export async function DELETE(request) {
  const user = await verifyAuth();
  if (!user) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return Response.json({ error: "Missing user ID" }, { status: 400 });
    }

    // Prevent user from deleting themselves
    if (parseInt(id) === user.id) {
      return Response.json({ error: "You cannot delete your own account" }, { status: 400 });
    }

    const connection = await getDbConnection();
    try {
      await connection.execute("DELETE FROM admins WHERE id = ?", [id]);
      return Response.json({ status: "success", message: "User deleted successfully" });
    } finally {
      await connection.end();
    }
  } catch (error) {
    return Response.json({ error: "Failed to delete user" }, { status: 500 });
  }
}

