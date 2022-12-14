const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

// const pool = mysql
//   .createPool({
//     host: process.env.MYSQL_HOST,
//     user: process.env.MYSQL_USER,
//     password: process.env.MYSQL_PASSWORD,
//     database: process.env.MYSQL_DATABASE,
//   })
//   .promise();
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "bong_da",
  password: "123",
});

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

  createUser: (user) => {
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
};

//test insert ID
