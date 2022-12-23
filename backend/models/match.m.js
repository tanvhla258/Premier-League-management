const db = require("../config/db");
const table_name = "tran_dau";

module.exports = {
  getAllMatches: async () => {
    return await db.load(`select * from ${table_name}`);
  },
  addMatch: async (match) => {
    //console.log(db.add(table_name, match));
    return db.add(table_name, match);
  },
  getOneMatch: async (id) => {
    const match = await db.load(
      `select * from ${table_name}where ID_Tran_Dau=${id}`
    );
    return match;
  },
  updateMatch: async (match) => {
    const condition = {
      ID_Tran_Dau: match.ID_Tran_Dau,
    };
    delete match.ID_Tran_Dau;
    const result = await db.update(table_name, match, condition);
    console.log(result);
    return result;
  },
  deleteMatch: async (id) => {
    return db.delete(table_name, "ID_Tran_Dau", id);
  },
  getNameByID: async (id) => {
    const result = await db.load(
      `select Ten_DB from doi_bong where ID_Doi_Bong =${id}`
    );
    return result;
  },
  getIdByName: async (name) => {
    const result = await db.load(
      `select ID_Doi_Bong ,San_Nha  from doi_bong where Ten_DB ='${name}'`
    );
    console.log(result);
    return result;
  },
  checkExistMatch: async (home, away) => {
    const exist = await db.load(
      `select exists (select 1 from ${table_name} where DOI_BONG_ID_Doi_BONG_1 =${away} and DOI_BONG_ID_Doi_BONG_2 =${home}) as exist`
    );
    return exist;
  },
};
