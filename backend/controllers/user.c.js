const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const userM = require("../models/user.m");
const passport = require("../config/passport");

//const { Users } = require("../models");
const saltRounds = 10;

exports.Login = async (req, res, next) => {
  if (req.isAuthenticated()) {
    // req.session.isAuthenticated = true;
    // req.session.authUser = req.body.Ten_User;
    // req.session.Ten_User = req.body.Ten_User;
    console.log("OK");
  } else {
    console.log("NOT OK");
  }
};
exports.Register = async (req, res, next) => {
  const user = req.body;
  return await userM.addUser(user);
};
exports.getAll = async (req, res, next) => {
  return res.send(await userM.getAllUser());
};
exports.getOne = async (req, res, next) => {
  return await userM.getUserById(2);
};

exports.DeleteOne = async (req, res, next) => {
  const user = req.body;
  return await userM.deleteUser(user);
};
exports.UpdateOne = async (req, res, next) => {
  const user = req.body;
  return await userM.u(user);
};
// exports.generateToken = (id) => {
//   return jwt.sign({ id }, process.env.JWT_SECRET, {
//     expiresIn: "30d",
//   });
// };
// exports.signup = async (req, res, next) => {
//   const { name, password, email } = req.body;
//   if (!name || !password || !email) {
//     res.status(400);
//     throw new Error("Missing field");
//   }
//   const exist = await userM.findOne({ email });

//   if (exist) {
//     res.status(400);
//     throw new Error("Email exists");
//   }
//   const passwordHashed = await bcrypt.hash(password, saltRounds);
//   const user = await userM.add({
//     name,
//     password: passwordHashed,
//     email,
//   });
//   if (user) {
//     res.status(201).json({
//       id: user.id,
//       name: user.name,
//       email: user.email,
//       token: generateToken(user.id),
//     });
//   } else {
//     res.status(400);
//     throw new Error("Invalid data");
//   }
//   res.json({ message: "Register Success" });
// };

// exports.login = async (req, res, next) => {
//   const { username, password } = req.body;
//   const user = await userM.byName({ username });
//   if (user) {
//     if (await bcrypt.compare(password, user.password)) {
//       res.json({
//         id: user.id,
//         name: user.name,
//         email: user.email,
//         token: generateToken(user.id),
//       });
//     }
//   } else {
//     res.status(400);
//     throw new Error("Invalid User");
//   }
// };
