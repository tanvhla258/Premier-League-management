const clubM = require("../models/club.m");
const moment = require("moment");

exports.getClubs = async (req, res, next) => {
  const clubs = await clubM.getAllClubs();
  res.json(clubs);
};

exports.createClub = async (req, res, next) => {
  const club = req.body;
  //console.log(club)
  await clubM.addClub(club);
  res.send("create club success");
};

exports.updateAClub = async (req, res, next) => {
  const club = req.body;
  await clubM.updateClub(club);
  res.send("update club success");
};

exports.deleteAClub = async (req, res, next) => {
  const id = req.params.clubId;
  await clubM.deleteClub(id);
  res.send("delete club success");
};

exports.getAClub = async (req, res, next) => {
  const id = req.params.clubId;
  const club = await clubM.getOneClub(id);
  res.json(club);
};

exports.findAClub = async (req, res, next) => {
  // const club = req.body;
  // const existedClub = await searchClub(club);
};
exports.getAllPlayersInClub = async (req, res, next) => {
  const id = req.params.clubId;
  //const club = await clubM.getOneClub(id);
  const players = await clubM.getPlayers(id);
  res.json(players);
};
exports.addPlayerToClub = async (req, res, next) => {
  var type = "";
  if (req.body.type === "domestic") {
    type = "TN";
  } else if (req.body.type === "foreign") {
    type = "NN";
  }
  const newplayer = {
    Ten_CT: req.body.name,
    Loai_CT: type,
    DOI_BONG_ID_Doi_Bong: req.body.club,
    Ngay_Sinh_CT: req.body.birthday,
  };
  const result = await clubM.addPlayer(newplayer);
  res.send(result);
};
exports.getOnePlayerInClub = async (req, res, next) => {
  const id = req.params.clubId;
  const id_player = req.params.playerId;
  const one_player_in_club = await clubM.getOnePlayerInClub(id, id_player);
  console.log(one_player_in_club);
  res.json(one_player_in_club);
};
exports.updateOnePlayerInClub = async (req, res, next) => {
  var type = "";
  if (req.body.type === "domestic") {
    type = "TN";
  } else if (req.body.type === "foreign") {
    type = "NN";
  }
  const update_player = {
    ID_Cau_Thu: req.body.id,
    Loai_CT: type,
    Ten_CT: req.body.name,
    Ngay_Sinh_CT: req.body.birthday,
    DOI_BONG_ID_Doi_Bong: req.body.club,
  };
  const flag = await clubM.updatePlayer(update_player);
  if (flag === 1) {
    res.send("Update successful");
  } else if (flag === 0) {
    res.send("Nothing new");
  }
};
exports.deleteOnePlayerInClub = async (req, res, next) => {
  await clubM.deletePlayer(req.body.id);
};
exports.searchOnePlayerInCLub = async (req, res, next) => {};
