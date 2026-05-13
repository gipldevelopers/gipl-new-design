import mysql from "mysql2/promise";
import bcrypt from "bcryptjs";

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

export async function getDbConnection() {
  const connection = await mysql.createConnection(dbConfig);
  return connection;
}

export async function initDb() {
  const connection = await getDbConnection();
  try {
    // Create admins table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS admins (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create contact submissions table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS contact_submissions (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50),
        address TEXT,
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Seed default admin if not exists
    const [rows] = await connection.execute("SELECT * FROM admins WHERE email = ?", ["developer@gohilinfotech.com"]);
    if (rows.length === 0) {
      const hashedPassword = await bcrypt.hash("admin123", 10); // Default password
      await connection.execute(
        "INSERT INTO admins (name, email, password) VALUES (?, ?, ?)",
        ["Developer", "developer@gohilinfotech.com", hashedPassword]
      );
      console.log("Seed: Default admin created (developer@gohilinfotech.com / admin123)");
    }

  } catch (error) {
    console.error("DB Init Error:", error);
    throw error;
  } finally {
    await connection.end();
  }
}
