const res = require("express/lib/response");
const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "thomas123",
  database: "goalsApp",
});

const connectDB = () => {
  con.connect((err) => {
    if (err) {
      throw err;
    }
    console.log("MYSQL Connected");
  });
};

module.exports = connectDB;
