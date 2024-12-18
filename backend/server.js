const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL database!");
});

// API to add an employee
app.post("/api/add-employee", (req, res) => {
  const sql = `
    INSERT INTO employees (name, employeeId, email, phone, department, dateOfJoining, role)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;
  const values = [
    req.body.name,
    req.body.employeeId,
    req.body.email,
    req.body.phone,
    req.body.department,
    req.body.dateOfJoining,
    req.body.role,
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error inserting employee:", err);
      return res.status(500).json({ error: "Database error" });
    }
    res.status(201).json({ message: "Employee added successfully", result });
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
