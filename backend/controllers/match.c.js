const matchM = require("../models/match.m");
const moment = require("moment");

exports.getAllMatches = async (req, res, next) => {
  const matches = await matchM.getAllMatches();

  var matchesByName = [];
  for (let i = 0; i < matches.length; i++) {
    var team1 = await matchM.getNameByID(matches[i].DOI_BONG_ID_Doi_Bong_1);
    var team2 = await matchM.getNameByID(matches[i].DOI_BONG_ID_Doi_Bong_2);
    matchesByName[i] = {
      DOI_BONG_ID_Doi_Bong_1: matches[i].DOI_BONG_ID_Doi_Bong_1,
      DOI_BONG_ID_Doi_Bong_2: matches[i].DOI_BONG_ID_Doi_Bong_2,
      Ten_DB_1: team1[0].Ten_DB,
      Ten_DB_2: team2[0].Ten_DB,

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
  const home = await matchM.getIdByName(req.body.home);
  const away = await matchM.getIdByName(req.body.away);
  console.log(req.body.home);
  console.log(req.body.away);

  // const existMatch = await matchM.checkExistMatch(
  //   home[0].ID_Doi_Bong,
  //   away[0].ID_Doi_Bong
  // );

  // if (existMatch[0].exist === 0) {
  //   vongdau = 1;
  // } else if (existMatch[0].exist === 1) {
  //   vongdau = 2;
  // }
  // const match = {
  //   DOI_BONG_ID_Doi_Bong_1: home[0].ID_Doi_Bong,
  //   DOI_BONG_ID_Doi_Bong_2: away[0].ID_Doi_Bong,
  //   San: home[0].San_Nha,
  //   Lich_Thi_Dau: datetime,
  //   Vong_Dau: vongdau,
  //   GIAI_DAU_ID_Giai_Dau: 1,
  // };
  // await matchM.addMatch(match);
  // res.send("create match success");
};

exports.getAMatch = async (req, res, next) => {
  const id = req.params.id;
  const match = await matchM.getOneMatch(id);
  res.json(match);
};

exports.updateAMatch = async (req, res, next) => {
  const match = req.body;

  res.json(await matchM.updateMatch(match));
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
