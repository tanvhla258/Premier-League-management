const db = require("../config/db");
const table_name = "cau_thu";

module.exports = {
  getAllPlayers: async () => {
    const players = await db.load(`select * from ${table_name}`);
    return players;
  },
  getOnePlayer: async (id) => {
    const player = await db.load(
      `select * from ${table_name} where ID_Cau_Thu =${id}`
    );
    return player;
  },
  createPlayer: async (player) => {
    return db.add(table_name, player);
  },
  updatePlayer: async (player) => {
    return db.update(table_name, "ID_Cau_Thu", player);
  },
  deletePlayer: async (id) => {
    return db.delete(table_name, "ID_Cau_Thu", id);
  },
  searchPlayer: async (keyword) => {
    keyword = "%" + keyword + "%";
    const rs = await db.load(`select * from ${table_name} where 
    LOWER (Ten_CT) like LOWER('${keyword}')`);

    return rs;
  },
};
