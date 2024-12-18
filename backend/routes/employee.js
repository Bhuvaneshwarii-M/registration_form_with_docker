const express = require("express");
const db = require("../db");

const router = express.Router();

// Add a new employee
router.post("/api/add-employee", (req, res, next) => {
  const sql =
    "INSERT INTO employees (`name`, `employeeId`, `email`, `phone`, `department`, `dateOfJoining`, `role`) VALUES (?)";
  const values = [
    req.body.name,
    req.body.employeeId,
    req.body.email,
    req.body.phone,
    req.body.department,
    req.body.dateOfJoining,
    req.body.role,
  ];

  db.query(sql, [values], (err, result) => {
    if (err) return next(err);
    res.status(201).json({ message: "Employee added successfully", result });
  });
});

module.exports = router;
