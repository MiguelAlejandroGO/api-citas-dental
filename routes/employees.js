const express = require("express");
const res = require("express/lib/response");
const router = express.Router();

const mysqlConnection = require("../database.js");

// GET all Employees
router.get("/", (req, res) => {
  mysqlConnection.query("SELECT * FROM citas", (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});

// GET An Employee
router.get("/:id", (req, res) => {
  const { id } = req.params;
  mysqlConnection.query(
    "SELECT * FROM citas WHERE id = ?",
    [id],
    (err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
      }
    }
  );
});

// DELETE An Employee
router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  mysqlConnection.query(
    "DELETE FROM citas WHERE id = ?",
    [id],
    (err, rows, fields) => {
      if (!err) {
        res.json({ status: "Employee Deleted" });
      } else {
        console.log(err);
      }
    }
  );
});

// INSERT An Employee
router.post("/create", (req, res) => {
  const {
    id,
    name,
    age,
    address,
    numberTel,
    numberCel,
    email,
    dateLast,
    dateNew,
    hoursDate,
    message,
  } = req.body;

  console.log(req.body);

  const query = `
    CALL dateAddOrEdit(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
  `;
  mysqlConnection.query(
    query,
    [
      id,
      name,
      age,
      address,
      numberTel,
      numberCel,
      email,
      dateLast,
      dateNew,
      hoursDate,
      message,
    ],
    (err, rows, fields) => {
      if (!err) {
        res.json({ status: "Date Saved" });
      } else {
        console.log(err);
        console.log("Error");
      }
    }
  );
});

module.exports = router;
