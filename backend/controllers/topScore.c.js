const topScoreM = require("../models/topScore.m");

exports.getAllTopScore = async (req, res, next) => {
  res.send(await topScoreM.getAllTopScore());
};
