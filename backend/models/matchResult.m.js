const db = require("../config/db")
const table_name = "ket_qua_tran_dau"
module.exports = {
    getAllMatchResult: async () => {
        return db.load(`select * from ${table_name}`)
    }
}