const db = require("../config/db");

module.exports = {
  getUser: async (id_users) => {
    const [rows] = await connection.query(
      `
    SELECT * 
    FROM user
    WHERE ID_User = ?
    `,
      [id_users]
    );
    return rows[0];
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
  findOne: (user) => {
    connection.execute(
      "SELECT * FROM `table` WHERE `name` = ? AND `age` > ?",
      ["Rick C-137", 53],
      function (err, results, fields) {
        console.log(results); // results contains rows returned by server
        console.log(fields); // fields contains extra meta data about results, if available

        // If you execute same statement again, it will be picked from a LRU cache
        // which will save query preparation time and give better performance
      }
    );
  },
};

//test insert ID
