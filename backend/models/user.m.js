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
  checkExist: async (username, mail) => {
    const exist = await db.load(`SELECT EXISTS( 
  select 1 from ${table_name} where Ten_User = '${username}' or Email = '${mail}'
  ) as exist;
`);
    return exist;
  },
  addUser: (user) => {
    return db.add(table_name, user);
  },
  deleteUser: (id) => {
    return db.delete(table_name, "ID_User", id);
  },
  updateUser: (user) => {
    return db.update(table_name, "ID_User", user);
  },
};

//test insert ID
