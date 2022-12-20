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
};
