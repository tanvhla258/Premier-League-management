const userM = require("../models/userM");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
exports.generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};
exports.userRegister = async (req, res, next) => {
  const { username, email, password, role } = req.body;
  const salt = await bcrypt.genSalt(10);
  const passwordHashed = await bcrypt.hash(password, salt);

  if (!username || !email || !password || !role) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  //check if user is exist
  const userExist = await userM.byName(username);

  if (userExist) {
    res.status(400);
    throw new Error("Username already exists");
  }
  const user = await userM.addUser({
    username,
    email,
    password: passwordHashed,
    role,
  });
  if (user) {
    res.status(201).json({
      _id: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user");
  }
  res.json({ message: "Register Success" });
};
