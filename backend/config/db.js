const mysql = require("mysql2");
const config = require("../config/default.json");

module.exports = {
  load: function (sql, fn_done, fn_fail) {
    const connection = mysql.createConnection(config.mysql);
    connection.connect();
    connection.query(sql, function (error, results, fields) {
      if (error) {
        connection.end();
        fn_fail(error);
        return;
      }
      fn_done(results);
      connection.end();
    });
  },
};
