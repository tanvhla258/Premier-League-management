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
    return db.update(table_name, "ID_Doi_Bong", match);
  },
  deleteMatch: async (id) => {
    return db.delete(table_name, "ID_Tran_Dau", id);
  },
  getIdByName: async (name) => {
    const result = await db.load(
      `select ID_Doi_Bong ,San_Nha  from doi_bong where Ten_DB ='${name}'`
    );

    return result;
  },
  checkExistMatch: async (home, away) => {
    // const match = await db.load(`SELECT * FROM ${table_name}
    //                 WHERE EXISTS (
    //                 select DOI_BONG_ID_Doi_Bong_1,DOI_BONG_ID_Doi_Bong_2
    //                 from ${table_name}
    //                 where DOI_BONG_ID_Doi_Bong_1 = ${away} and DOI_BONG_ID_Doi_Bong_2 = ${home});`);
    // console.log(match);
    // return match;
    const exist = await db.load(
      `select exists (select 1 from tran_dau where DOI_BONG_ID_Doi_BONG_1 =${away} and DOI_BONG_ID_Doi_BONG_2 =${home}) as exist`
    );
    console.log(exist);
    return exist;
  },
  getRound: async (home, away) => {
    console.log(home);
    console.log(away);
    // const round =
    //   await db.load(`SELECT * FROM ( SELECT  2 ,${away},${home}  ) AS tmp
    //                 WHERE EXISTS (
    //                 select DOI_BONG_ID_Doi_Bong_1,DOI_BONG_ID_Doi_Bong_2
    //                 from ${table_name}
    //                 where DOI_BONG_ID_Doi_Bong_1 = ${home} and DOI_BONG_ID_Doi_Bong_2 = ${away});`);
    const round = await db.load(`SELECT * FROM  (Select 2) as tmp
                    WHERE EXISTS (
                    select DOI_BONG_ID_Doi_Bong_1,DOI_BONG_ID_Doi_Bong_2
                    from ${table_name}
                    where DOI_BONG_ID_Doi_Bong_1 = ${away} and DOI_BONG_ID_Doi_Bong_2 = ${home});`);

    console.log(round);
  },
};
