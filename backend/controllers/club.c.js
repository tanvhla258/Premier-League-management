const clubM = require("../models/club.m");
const moment = require("moment");
const db = require("../config/db");

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
  const updateClub = {
    ID_Doi_Bong: req.body.id,
    Ten_DB: req.body.name,
    San_Nha: req.body.stadium,
  };
  const flag = await clubM.updateClub(updateClub);
  if (flag === 1) {
    res.send("Update successful");
  } else if (flag === 0) {
    res.send("Nothing new");
  }
};

exports.deleteAClub = async (req, res, next) => {
  const id = req.params.clubId;
  const playerInClub = await clubM.getPlayers(id);
  const deleteClubOfPlayer = [];
  for (let i = 0; i < playerInClub.length; i++) {
    deleteClubOfPlayer[i] = {
      ID_Cau_Thu: playerInClub[i].ID_Cau_Thu,
      DOI_BONG_ID_Doi_Bong: 1,
    };
    await clubM.updatePlayer(deleteClubOfPlayer[i]);
  }

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
  var playersAndLogo = [];
  for (let i = 0; i < players.length; i++) {
    var logoClub = await clubM.getLogoByID(players[i].DOI_BONG_ID_Doi_Bong);
    playersAndLogo[i] = {
      ID_Cau_Thu: players[i].ID_Cau_Thu,
      Ten_CT: players[i].Ten_CT,
      Loai_CT: players[i].Loai_CT,
      Ghi_Chu: null,
      DOI_BONG_ID_Doi_Bong: players[i].DOI_BONG_ID_Doi_Bong,
      Ngay_Sinh_CT: players[i].Ngay_Sinh_CT,
      Tong_Ban_Thang: players[i].Tong_Ban_Thang,
      Logo: logoClub[0].Logo,
    };
  }
  console.log(playersAndLogo);
  res.send(playersAndLogo);
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
