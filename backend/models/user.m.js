const db = require("../config/db");

module.exports = {
  getAllUser: async () => {
    const users = db.load(
      "select * from user",
      function (rows) {
        console.log(rows);
      },
      function (error) {
        console.log(error);
      }
    );
    return users;
  },
  getUser: async (id) => {
    const user = db.load(
      `select * from user where ID_User=${id}`,
      function (rows) {
        console.log(rows);
      },
      function (error) {
        console.log(error.sqlMessage);
      }
    );
    return user;
  },

  // test lay ID
  // const users=await getUser(1)
  // console.log(users)

  addUser: (user) => {
    const result = connection.query(
      `
    INSERT INTO user SET ?
    `,
      user,
      function (error, results, fields) {
        if (error) throw error;
        // Neat!
      }
    );
    console.log(result); // INSERT INTO posts SET `id` = 1, `title` = 'Hello MySQL'
  },
  // findOne: (user) => {
  //   connection.execute(
  //     "SELECT * FROM `table` WHERE `name` = ? AND `age` > ?",
  //     ["Rick C-137", 53],
  //     function (err, results, fields) {
  //       console.log(results); // results contains rows returned by server
  //       console.log(fields); // fields contains extra meta data about results, if available

  //       // If you execute same statement again, it will be picked from a LRU cache
  //       // which will save query preparation time and give better performance
  //     }
  //   );
  // },
};

//test insert ID
