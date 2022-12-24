const { update } = require("../config/db");
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
  getScorePlayerAndClub: async (idplayer) => {
    const result = await db.load(`
    select Ten_CT,Ten_DB
    from cau_thu as ct join doi_bong as db 
    where  ct.ID_Cau_Thu=${idplayer} and ct.DOI_BONG_ID_Doi_Bong = db.ID_Doi_Bong `);
    return result;
  },
  updateMatchResult: async (match) => {
    const condition = {
      TRAN_DAU_ID_Tran_Dau: match.ID_Tran_Dau,
    };
    delete match.ID_Tran_Dau;
    const result = await update(table_name, match, condition);
    return result;
  },
  createMatchResult: async (match) => {},
};
