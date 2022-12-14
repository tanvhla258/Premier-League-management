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

  update: (tableName, idField, entity) => {
    return new Promise((resolve, reject) => {
      // if (entity[idField]) {
      // const id = entity[idField];
      // delete entity[idField];
      const condition = pick(entity, [idField]);
      entity = omit(entity, [idField]);

      // var sql = `update ${tableName} set ? where ${idField} = ?`;
      var sql = `update ${tableName} set ? where ?`;
      // connection.query(sql, [entity, id], (error, results, fields) => {
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

  delete: (tableName, idField, id) => {
    return new Promise((resolve, reject) => {
      var sql = `delete from ${tableName} where ${idField} = ?`;
      pool.query(sql, id, (error, results, fields) => {
        if (error) {
          reject(error);
        } else {
          resolve(results.affectedRows);
        }
      });
    });
  },
};
