import { getDbConnection, initDb } from "@/lib/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(request) {
  try {
    await initDb(); // Ensure tables and seed data exist
    
    const { email, password } = await request.json();

    if (!email || !password) {
      return Response.json({ error: "Email and password are required" }, { status: 400 });
    }

    const connection = await getDbConnection();
    try {
      const [rows] = await connection.execute("SELECT * FROM admins WHERE email = ?", [email]);
      
      if (rows.length === 0) {
        return Response.json({ error: "Invalid credentials" }, { status: 401 });
      }

      const admin = rows[0];
      const isPasswordValid = await bcrypt.compare(password, admin.password);

      if (!isPasswordValid) {
        return Response.json({ error: "Invalid credentials" }, { status: 401 });
      }

      // Create JWT
      const token = jwt.sign(
        { id: admin.id, email: admin.email, name: admin.name },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
      );

      // Set cookie
      const cookieStore = await cookies();
      cookieStore.set("admin_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24, // 1 day
        path: "/",
      });

      return Response.json({
        status: "success",
        user: { id: admin.id, email: admin.email, name: admin.name }
      });

    } finally {
      await connection.end();
    }
  } catch (error) {
    console.error("Login Error:", error);
    return Response.json({ 
      error: "Authentication failed", 
      details: error.message,
      code: error.code
    }, { status: 500 });
  }
}

