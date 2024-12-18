CREATE DATABASE IF NOT EXISTS my_database;
CREATE TABLE IF NOT EXISTS employees (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  employeeId INT,
  email VARCHAR(100),
  phone VARCHAR(20),
  department VARCHAR(50),
  dateOfJoining DATE,
  role VARCHAR(50)
);
