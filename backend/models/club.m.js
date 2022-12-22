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
    console.log(result);
    return result;
  },
  deleteClub: async (id) => {
    return db.delete(table_name, "ID_Doi_Bong", id);
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
    const condition = {
      ID_Cau_Thu: player.ID_Cau_Thu,
    };
    delete player.ID_Cau_Thu;
    const updated_player = await db.update("cau_thu", player, condition);

    return updated_player;
  },
  deletePlayer: async (id) => {
    const condition = {
      ID_Cau_Thu: id,
    };

    return await db.delete("cau_thu", condition);
  },
};
