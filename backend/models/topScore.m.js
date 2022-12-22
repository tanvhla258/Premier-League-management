const db = require("../config/db");
const table_name = "ghi_ban";
module.exports = {
  getAllTopScore: async () => {
    const result = await db.load(
      `select CAU_THU_ID_Cau_Thu, count(*) AS So_Ban_Thang 
      from ${table_name} 
      group by CAU_THU_ID_Cau_thu
      order by So_Ban_Thang DESC`
    );
    return result;
  },
  getAllTypeOfScore: async () => {
    const result = await db.load(
      `select * from ${table_name} as GHIBAN join loai_ban_thang AS LOAIBANTHANG 
      where GHIBAN.LOAI_BAN_THANG_ID_Loai_Ban_Thang = LOAIBANTHANG.ID_Loai_Ban_Thang `
    );
    return result;
  },
  getClubIDByPlayerID: async (id) => {
    const result = await db.load(
      `select DOI_BONG_ID_Doi_Bong from cau_thu where ID_Cau_Thu =${id}`
    );
    return result;
  },
  getClubNameByClubID: async (id) => {
    const result = await db.load(
      `select Ten_DB from doi_bong where ID_Doi_Bong=${id}`
    );
    return result;
  },
  getPlayerNameByPlayerID: async (id) => {
    const result = await db.load(
      `select Ten_CT from cau_thu where ID_Cau_Thu=${id} `
    );
    return result;
  },
};
