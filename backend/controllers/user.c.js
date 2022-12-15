const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const userM = require("../models/user.m");

//const { Users } = require("../models");
const saltRounds = 10;

exports.Login = async (req, res, next) => {
  const username = req.body.Ten_User;
  const password = req.body.Password;
  const userDatabase = await userM.getUserByName(username);
  if (userDatabase === null) {
    res.json({ error: "Invalid User" });
  }
  const compare = bcrypt.compareSync(password, userDatabase[0].Password);
  if (compare === false) {
    res.json({ error: "Wrong password" });
    return;
  }
  res.json("Sign in success");
};
exports.Register = async (req, res, next) => {
  const passwordHased = await bcrypt.hash(req.body.Password, saltRounds);
  const user = {
    Ten_User: req.body.Ten_User,
    Password: passwordHased,
  };
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
