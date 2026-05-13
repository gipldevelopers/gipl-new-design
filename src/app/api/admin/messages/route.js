import mysql from "mysql2/promise";

const dbConfig = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

export async function GET() {
  let connection;
  try {
    connection = await mysql.createConnection(dbConfig);
    
    const [rows] = await connection.execute(
      "SELECT * FROM contact_submissions ORDER BY created_at DESC"
    );

    return Response.json({
      status: "success",
      data: rows
    });
  } catch (error) {
    console.error("Admin API Error:", error);
    return Response.json(
      { 
        status: "error",
        error: "Failed to fetch messages",
        details: error.message 
      },
      { status: 500 }
    );
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}
