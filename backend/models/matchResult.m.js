const db = require("../config/db");
const table_name = "ket_qua_tran_dau";
module.exports = {
  getAllMatchResult: async () => {
    return db.load(`select * from ${table_name}`);
  },
  getStadiumByHomeID: async (id) => {
    const result = await db.load(
      `select San_Nha from doi_bong where ID_Doi_Bong=${id}`
    );
    return result;
  },
  getTimeByMatchID: async (id) => {
    const result = await db.load(
      `select Lich_Thi_Dau from tran_dau where ID_Tran_Dau=${id}`
    );
    return result;
  },
};
