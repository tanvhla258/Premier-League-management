const playerM = require("../models/player.m");
exports.getPlayers = async (req, res, next) => {
  const players = await playerM.getAllPlayers();
  res.send(players);
};
exports.getAPlayer = async (req, res, next) => {
  const id = req.params.id;
  const player = await playerM.getOnePlayer(id);
  res.send(player);
};
exports.createPlayer = async (req, res, next) => {
  const player = req.body;
  await playerM.createPlayer(player);
  res.send("create player success");
};
exports.updatePlayer = async (req, res, next) => {
  const player = req.body;
  await playerM.updatePlayer(player);
  res.send("update player success");
};
exports.deletePlayer = async (req, res, next) => {
  const id = req.params.id;
  await playerM.deletePlayer(id);
  res.send("delete player success");
};
exports.searchPlayer = async (req, res, next) => {
  const keyword = req.params.keyword;
  const player = await playerM.searchPlayer(keyword);
  if (player.length === 0) {
    res.send("Empty");
  } else {
    res.send(player);
  }
};
