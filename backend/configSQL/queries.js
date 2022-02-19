const res = require("express/lib/response");
const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "thomas123",
  database: "goalsApp",
});

const testQuery = () => {
  con.query(
    "INSERT INTO goals VALUES (2453, 'node test thre', 5341)",
    (err, res) => {
      if (err) throw err;
    }
  );
};

module.exports = testQuery;
