const db = require("../config/db")
const table_name = "tran_dau"

module.exports = {
    getAllMatches: async () => {
        return await db.load(`select * from ${table_name}`)


    },
    addMatch: async (match) => {
        return db.add(table_name, match);
    },
    getOneMatch: async (id) => {
        const match = await db.load(`select * from ${table_name}where ID_Tran_Dau=${id}`)
        return match;
    },
    updateMatch: async (match) => {
        return db.update(table_name, "ID_Doi_Bong", match);
    },
    deleteMatch: async (id) => {
        return db.delete(table_name, "ID_Tran_Dau", id)
    },
    getIdByName: async (name) => {
        const id = await db.load(`select ID_Doi_Bong from doi_bong where Ten_DB ='${name}'`)
        return id;
    }

}