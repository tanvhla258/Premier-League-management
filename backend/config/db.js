const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "bong_da",
  password: "123",
});

connection.connect();
const sql = "SELECT 1+1 AS solution";
connection.query(sql, function (error, results, fields) {
  if (error) throw error;
  console.log("The solution is :", results[0].solution);
  connection.end();
});
