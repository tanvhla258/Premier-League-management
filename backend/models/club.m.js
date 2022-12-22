const db = require("../config/db");
const table_name = "doi_bong";

module.exports = {
  getAllClubs: async () => {
    const clubs = await db.load(`select * from ${table_name}`);
    return clubs;
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
    const conditionOfResultHomeTeam = {
      TRAN_DAU_DOI_BONG_ID_Doi_Bong_1: id,
    };
    const conditionOfResultAwayTeam = {
      TRAN_DAU_DOI_BONG_ID_Doi_Bong_2: id,
    };
    await db.delete("bang_xep_hang", conditionOfRank);
    try {
      await db.delete("ket_qua_tran_dau", conditionOfResultHomeTeam);
      await db.delete("ket_qua_tran_dau", conditionOfResultAwayTeam);
    } catch (e) {
      console.log(e);
    }
    try {
      await db.delete("tran_dau", conditionOfMatchHomeTeam);
      await db.delete("tran_dau", conditionOfMatchAwayTeam);
    } catch (e) {
      console.log(e);
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
    const conditionForScoreTable = {
      CAU_THU_ID_Cau_Thu: player.ID_Cau_Thu,
    };
    const playerInScoreTable = {
      CAU_THU_DOI_BONG_ID_Doi_Bong: player.DOI_BONG_ID_Doi_Bong,
    };
    const update_score_table = await db.delete(
      "ghi_ban",

      conditionForScoreTable
    );
    ///////////////////////////////////////////
    const conditionForPlayerTable = {
      ID_Cau_Thu: player.ID_Cau_Thu,
    };
    await db.update("cau_thu", player, conditionForPlayerTable);

    delete player.ID_Cau_Thu;
  },
  deletePlayer: async (id) => {
    const condition = {
      ID_Cau_Thu: id,
    };

    return await db.delete("cau_thu", condition);
  },
};
