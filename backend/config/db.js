const mysql = require("mysql2");
const config = require("../config/default.json");

module.exports = {
  load: function (sql) {
    const connection = mysql.createConnection(config.mysql);
    connection.connect();
    connection.query(sql, function (error, results, fields) {
      if (error) throw error;
      console.log(results);

      connection.end();
    });
  },
};
