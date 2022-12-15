const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const userM = require("../models/user.m");

//const { Users } = require("../models");
const saltRounds = 10;

exports.Login = async (req, res, next) => {
  const username = req.body.Ten_User;
  const password = req.body.Password;
  const userDatabase = await userM.getUserByName(username);
  //console.log(userDatabase);
  if (userDatabase.length === 0) {
    return res.send("Ivalid User");
  } else {
    const compare = bcrypt.compareSync(password, userDatabase[0].Password);
    if (compare === false) {
      return res.send("Wrong password");
    } else {
      return res.json(userDatabase);
    }
  }

  res.status(201);
  res.json(await userM.getUserByName(username));
};
exports.Register = async (req, res, next) => {
  const passwordHased = await bcrypt.hash(req.body.Password, saltRounds);
  const user = {
    Ten_User: req.body.Ten_User,
    Password: passwordHased,
    Email: req.body.Email,
    Ngay_Sinh: req.body.Ngay_Sinh,
    Phone: req.body.Phone,
  };
  await userM.addUser(user);
  res.send("Register success");
};
exports.getAll = async (req, res, next) => {
  res.send(await userM.getAllUser());
};
exports.getOne = async (req, res, next) => {
  const id = req.params["id"];
  res.send(await userM.getUserById(id));
};

exports.DeleteOne = async (req, res, next) => {
  const id = req.params["id"];
  //const user = req.body;
  await userM.deleteUser(id);
  res.send("Deleted");
};
exports.UpdateOne = async (req, res, next) => {
  const id = req.params["id"];
  const user = req.body;

  await userM.updateUser(user);
  res.send("Updated");
};
