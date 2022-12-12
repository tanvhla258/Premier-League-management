import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
    
}).promise()


export async function getUser(id_users) {
    const [rows] = await pool.query(`
    SELECT * 
    FROM user
    WHERE ID_User = ?
    `, [id_users])
    return rows[0]
  }

// test lay ID
// const users=await getUser(1)
// console.log(users)


export async function createUser(Password,Email,Ten_User,Ngay_Sinh,Phone) {
    const [result] = await pool.query(`
    INSERT INTO user ( Password,Email,Ten_User,Ngay_Sinh,Phone) 
    VALUES (?,?,?,?,?)
    `, [Password,Email,Ten_User,Ngay_Sinh,Phone])
    const id_user = result.insertId
    return getUser(id_user)
  }

//test insert ID
const result=await createUser('test','test','test','2002-3-1','98765643412',)
console.log(result)


