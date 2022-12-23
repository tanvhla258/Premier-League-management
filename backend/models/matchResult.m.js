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
  getScore: async (id) => {
    const result = await db.load(`
    select Thoi_Diem,LOAI_BAN_THANG_ID_Loai_Ban_Thang,CAU_THU_ID_Cau_Thu,KET_QUA_TRAN_DAU_TRAN_DAU_ID_Tran_Dau,Ten_LBT 
     from ghi_ban as gb join loai_ban_thang as lbt
    where KET_QUA_TRAN_DAU_TRAN_DAU_ID_Tran_Dau=${id} and gb.LOAI_BAN_THANG_ID_Loai_Ban_Thang=lbt.ID_Loai_Ban_Thang `);
    return result;
  },
};
