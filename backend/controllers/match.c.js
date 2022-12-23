const matchM = require("../models/match.m");
const moment = require("moment");
const clubM = require("../models/club.m");
const matchResultM = require("../models/matchResult.m");
exports.getAllMatches = async (req, res, next) => {
  const matches = await matchM.getAllMatches();

  var matchesByName = [];
  for (let i = 0; i < matches.length; i++) {
    var team1 = await matchM.getNameByID(matches[i].DOI_BONG_ID_Doi_Bong_1);
    var team2 = await matchM.getNameByID(matches[i].DOI_BONG_ID_Doi_Bong_2);
    var logo1 = await clubM.getLogoByName(team1[0].Ten_DB);
    var logo2 = await clubM.getLogoByName(team2[0].Ten_DB);

    matchesByName[i] = {
      ID_Tran_Dau: matches[i].ID_Tran_Dau,
      DOI_BONG_ID_Doi_Bong_1: matches[i].DOI_BONG_ID_Doi_Bong_1,
      DOI_BONG_ID_Doi_Bong_2: matches[i].DOI_BONG_ID_Doi_Bong_2,
      Ten_DB_1: team1[0].Ten_DB,
      Ten_DB_2: team2[0].Ten_DB,
      Logo_DB_1: logo1,
      Logo_DB_2: logo2,
      San: matches[i].San,
      Lich_Thi_Dau: matches[i].Lich_Thi_Dau,
      Vong_Dau: matches[i].Vong_Dau,
      GIAI_DAU_ID_Giai_Dau: matches[i].GIAI_DAU_ID_Giai_Dau,
    };
  }

  res.json(matchesByName);
};
exports.createAMatch = async (req, res, next) => {
  const datetime = req.body.date + " " + req.body.time;

  const existMatch = await matchM.checkExistMatch(req.body.home, req.body.away);

  if (existMatch[0].exist === 0) {
    vongdau = 1;
  } else if (existMatch[0].exist === 1) {
    vongdau = 2;
  }
  const match = {
    DOI_BONG_ID_Doi_Bong_1: req.body.home,
    DOI_BONG_ID_Doi_Bong_2: req.body.away,
    San: req.body.stadium,
    Lich_Thi_Dau: datetime,
    Vong_Dau: vongdau,
    GIAI_DAU_ID_Giai_Dau: 1,
  };
  await matchM.addMatch(match);
  res.send("create match success");
};

exports.getAMatch = async (req, res, next) => {
  const id = req.params.id;
  const match = await matchM.getOneMatch(id);
  res.json(match);
};

exports.updateAMatch = async (req, res, next) => {
  const datetime = req.body.day + " " + req.body.time;
  const updateMatch = {
    ID_Tran_Dau: req.body.ID_Tran_Dau,
    Lich_Thi_Dau: datetime,
  };
  const flag = await matchM.updateMatch(updateMatch);
  if (flag === 1) {
    res.send("Update successful");
  } else {
    res.send("Nothing new");
  }
};

exports.deleteAMatch = async (req, res, next) => {
  const id = req.params.id;
  await matchM.deleteMatch(id);
  res.send("delete match success");
};

exports.searchAMatch = async (req, res, next) => {};

// exports.getAllGoals = async (req, res, next) => {

// }

// exports.createAGoal = async (req, res, next) => {

// }

// exports.updateAGoal = async (req, res, next) => {

// }

// exports.deleteAGoal = async (req, res, next) => {

// }
