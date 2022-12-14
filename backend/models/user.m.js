const db = require("../config/db");
const table_name = "user";
module.exports = {
  getAllUser: async () => {
    const users = await db.load("select * from user");
    return users;
  },
  getUserById: async (id) => {
    const user = await db.load(`select * from user where ID_User=${id}`);
    return user;
  },
  getUserByName: async (name) => {
    const u = await db.load(`select * from user where Ten_User='${name}'`);
    return u;
  },
  addUser: (user) => {
    return db.add(table_name, user);
  },
  deleteUser: (user) => {
    return db.delete(table_name, "ID_User", user);
  },
  updateUser: (user) => {
    return db.update(table_name, "ID_User", user);
  },
};

//test insert ID
