const clubM = require("../models/club.m");

exports.getClubs = async (req, res, next) => {
  const clubs = await clubM.getAllClubs();
  res.json(clubs);
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
  const id = req.params.id;
  await clubM.deleteClub(id);
  res.send("delete club success");
};

exports.getAClub = async (req, res, next) => {
  const id = req.params.id;
  const club = await clubM.getOneClub(id);
  res.json(club);
};

exports.findAClub = async (req, res, next) => {
  // const club = req.body;
  // const existedClub = await searchClub(club);
};
exports.getAllPlayersInClub = async (req, res, next) => {
  const id = req.params.id;
  //const club = await clubM.getOneClub(id);
  const players = await clubM.getPlayers(id);
  res.json(players);
};
exports.addPlayerToClub = async (req, res, next) => {
  const newplayer = {
    Ten_CT: req.body.name,
    Loai_CT: req.body.type,
    DOI_BONG_ID_Doi_Bong: req.body.club,
    Ngay_Sinh_CT: req.body.birthday
  };
  console.log(newplayer)
  await clubM.addPlayer(newplayer);
};
exports.getOnePlayerInClub = async (req, res, next) => {
  const id = req.params.id;
  const id_player = req.params.playerId;
  const one_player_in_club = await clubM.getOnePlayerInClub(id, id_player);
  console.log(one_player_in_club);
  res.json(one_player_in_club);
};
exports.updateOnePlayerInClub = async (req, res, next) => { };
exports.deleteOnePlayerInClub = async (req, res, next) => { };
exports.searchOnePlayerInCLub = async (req, res, next) => { };
