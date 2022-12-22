const db = require("../config/db");
const table_name = "ghi_ban";
module.exports = {
  getAllTopScore: async () => {
    const result = await db.load(
      `select CAU_THU_ID_Cau_Thu,CAU_THU_DOI_BONG_ID_Doi_Bong, count(*) AS So_Ban_Thang 
      from ${table_name} 
      group by CAU_THU_ID_Cau_thu,CAU_THU_DOI_BONG_ID_Doi_Bong
      order by So_Ban_Thang DESC`
    );
    return result;
  },
  getAllTypeOfScore: async () => {
    const result = await db.load(
      `select * from ${table_name} join loai_ban_thang `
    );
    return result;
  },
  getClubNameByClubID: async (id) => {
    const result = await db.load(
      `select Ten_DB from doi_bong where ID_Doi_Bong =${id}`
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
