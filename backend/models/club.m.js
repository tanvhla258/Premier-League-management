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
    return db.update(table_name, "ID_Doi_Bong", club);
  },
  deleteClub: async (club) => {
    return db.delete(table_name, "ID_Doi_Bong", id);
  },
  getOneClub: async (id) => {
    const club = await db.load(`select * from user where ID_Doi_Bong=${id}`);
    return club;
  },
  searchClub: async (club) => {},
};
