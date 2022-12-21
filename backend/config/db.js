const mysql = require("mysql2");
const config = require("../config/default.json");
const pool = mysql.createPool(config.mysql);
module.exports = {
  load: function (sql) {
    return new Promise(function (resolve, reject) {
      pool.query(sql, function (error, results, fields) {
        if (error) {
          return reject(error);
        }

        resolve(results);
      });
    });
  },
  add: (tableName, entity) => {
    return new Promise((resolve, reject) => {
      var sql = `insert into ${tableName} set ?`;

      pool.query(sql, entity, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  },

  update: (tableName, entity, condition) => {
    return new Promise((resolve, reject) => {
      const sql = `update ${tableName} set ? where ?`;
      pool.query(sql, [entity, condition], (error, results, fields) => {
        if (error) {
          reject(error);
        } else {
          resolve(results.changedRows);
        }
      });
      // }
    });
  },

  delete: (tableName, condition) => {
    return new Promise((resolve, reject) => {
      var sql = `delete from ${tableName} where  ? `;
      pool.query(sql, condition, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results.affectedRows);
        }
      });
    });
  },
};
