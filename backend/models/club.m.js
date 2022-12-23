const db = require("../config/db");
const table_name = "doi_bong";

module.exports = {
  getAllClubs: async () => {
    const clubs = await db.load(
      `select * from ${table_name} where ID_Doi_Bong <> 1 order by ID_Doi_Bong desc`
    );
    return clubs;
  },
  getLogoByID: async (id) => {
    const logo = await db.load(`
    select Logo from ${table_name} where ID_Doi_Bong=${id}`);
    return logo;
  },
  getImageByID: async (clubid) => {
    const img = await db.load(`
    select Picture from cau_thu where DOI_BONG_ID_Doi_Bong=${clubid} `);
    return img;
  },
  getLogoByName: async (name) => {
    const logo = await db.load(`
    select Logo from ${table_name} where Ten_DB ='${name}'`);
    return logo;
  },
  addClub: async (club) => {
    return db.add(table_name, club);
  },
  updateClub: async (club) => {
    const condition = {
      ID_Doi_Bong: club.ID_Doi_Bong,
    };
    delete club.ID_Doi_Bong;
    const result = await db.update(table_name, club, condition);
    return result;
  },
  deleteClub: async (id) => {
    const conditionOfClub = {
      ID_Doi_Bong: id,
    };
    const conditionOfRank = {
      DOI_BONG_ID_Doi_Bong: id,
    };
    const conditionOfMatchHomeTeam = {
      DOI_BONG_ID_Doi_Bong_1: id,
    };
    const conditionOfMatchAwayTeam = {
      DOI_BONG_ID_Doi_Bong_2: id,
    };

    const idMatchResult = await db.load(
      `select TRAN_DAU_ID_Tran_Dau from ket_qua_tran_dau where TRAN_DAU_DOI_BONG_ID_Doi_Bong_1=${id} or TRAN_DAU_DOI_BONG_ID_Doi_Bong_2=${id}`
    );
    const idGoal = [];
    const idMatch = [];
    for (let i = 0; i < idMatchResult.length; i++) {
      idGoal[i] = {
        KET_QUA_TRAN_DAU_TRAN_DAU_ID_Tran_Dau:
          idMatchResult[i].TRAN_DAU_ID_Tran_Dau,
      };
      idMatch[i] = {
        ID_Tran_Dau: idMatchResult[i].TRAN_DAU_ID_Tran_Dau,
      };
    }

    try {
      await db.delete("bang_xep_hang", conditionOfRank);
    } catch (e) {
      console.log(e);
    }
    for (let i = 0; i < idMatchResult.length; i++) {
      try {
        await db.delete("ghi_ban", idGoal[i]);
        await db.delete("ket_qua_tran_dau", idMatchResult[i]);

        await db.delete("tran_dau", idMatch[i]);
      } catch (e) {
        console.log(e);
      }
    }

    return await db.delete(table_name, conditionOfClub);
  },
  getOneClub: async (id) => {
    const club = await db.load(
      `select * from ${table_name} where ID_Doi_Bong=${id}`
    );
    return club;
  },
  searchClub: async (club) => {},
  getPlayers: async (id) => {
    const players = await db.load(
      `select * from cau_thu where DOI_BONG_ID_Doi_Bong=${id}`
    );
    return players;
  },
  addPlayer: async (player) => {
    return db.add("cau_thu", player);
  },
  getOnePlayerInClub: async (id, idplayer) => {
    const player = await db.load(
      `select * from cau_thu where DOI_BONG_ID_Doi_Bong=${id} and ID_Cau_Thu=${idplayer} `
    );
    return player;
  },
  updatePlayer: async (player) => {
    const conditionForPlayerTable = {
      ID_Cau_Thu: player.ID_Cau_Thu,
    };
    await db.update("cau_thu", player, conditionForPlayerTable);
  },
  deletePlayer: async (id) => {
    const condition = {
      ID_Cau_Thu: id,
    };

    return await db.delete("cau_thu", condition);
  },
};
