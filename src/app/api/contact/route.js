import mysql from "mysql2/promise";

// Database configuration
const dbConfig = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

// Function to initialize database and table
async function initializeDatabase() {
  // Connect without database first to ensure DB exists
  const connection = await mysql.createConnection({
    host: dbConfig.host,
    user: dbConfig.user,
    password: dbConfig.password,
  });

  try {
    // Create database if it doesn't exist
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${dbConfig.database}\``);
    await connection.query(`USE \`${dbConfig.database}\``);

    // Create table if it doesn't exist
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS contact_submissions (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50),
        address TEXT,
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    await connection.query(createTableQuery);
    return connection;
  } catch (error) {
    await connection.end();
    throw error;
  }
}

export async function POST(request) {
  let connection;
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Initialize and connect
    connection = await initializeDatabase();

    // Insert data
    const insertQuery = `
      INSERT INTO contact_submissions (name, email, phone, address, message)
      VALUES (?, ?, ?, ?, ?)
    `;
    
    await connection.execute(insertQuery, [
      body.name,
      body.email,
      body.phone || null,
      body.address || null,
      body.message,
    ]);

    return Response.json(
      { 
        status: "success",
        message: "Message sent and saved successfully" 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Database Error:", error);
    return Response.json(
      { 
        status: "error",
        error: "Database Connection/Query Failed",
        details: error.message,
        code: error.code // Include MySQL error code for easier debugging
      },
      { status: 500 }
    );
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}

