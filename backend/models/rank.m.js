const db = require("../config/db");
const table_name = "bang_xep_hang";
module.exports = {
  getAllRank: async () => {
    return db.load(`select * from ${table_name} order by Hang asc`);
  },
  getNameByID: async (id) => {
    const result = await db.load(
      `select Ten_DB from doi_bong where ID_Doi_Bong =${id}`
    );
    return result;
  },
};
