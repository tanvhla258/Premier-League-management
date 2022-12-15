const clubM = require("../models/club.m");

exports.getClubs = async (req, res, next) => {
  res.send(await clubM.getAllClubs());
};

exports.createClub = async (req, res, next) => {
  const club = req.body;
  await clubM.addClub(club);
  res.send("create club success");
};

exports.updateAClub = async (req, res, next) => {
  const club = req.body;
  await clubM.updateClub(club);
  res.send("update club success");
};

exports.deleteAClub = async (req, res, next) => {
  const id = req.params["id"];
  await clubM.deleteClub(id);
  res.send("delete club success");
};

exports.getAClub = async (req, res, next) => {
  const id = req.params["id"];
  await clubM.getOneClub(id);
  res.send("get one club");
};

exports.findAClub = async (req, res, next) => {
  const club = req.body;
  const existedClub = await searchClub(club);
};
exports.getAllPlayersInClub = async (req, res, next) => {};
exports.addPlayerToClub = async (req, res, next) => {};
exports.getOnePlayerInClub = async (req, res, next) => {};
exports.updateOnePlayerInClub = async (req, res, next) => {};
exports.deleteOnePlayerInClub = async (req, res, next) => {};
exports.searchOnePlayerInCLub = async (req, res, next) => {};
