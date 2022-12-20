const db = require("../config/db");
const table_name = "bang_xep_hang";
module.exports = {
  getAllRank: async () => {
    return db.load(`select * from ${table_name} order by Hang asc`);
  },
};
