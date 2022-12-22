const topScoreM = require("../models/topScore.m");

exports.getAllTopScore = async (req, res, next) => {
  const score = await topScoreM.getAllTopScore();
  var topscore = [];
  for (let i = 0; i < score.length; i++) {
    var playerName = await topScoreM.getPlayerNameByPlayerID(
      score[i].CAU_THU_ID_Cau_Thu
    );
    var clubID = await topScoreM.getClubIDByPlayerID(
      score[i].CAU_THU_ID_Cau_Thu
    );

    var clubName = await topScoreM.getClubNameByClubID(
      clubID[0].DOI_BONG_ID_Doi_Bong
    );
    topscore[i] = {
      Ten_CT: playerName[0].Ten_CT,
      Ten_DB: clubName[0].Ten_DB,
      So_Ban_Thang: score[i].So_Ban_Thang,
    };
  }
  console.log(topscore);

  res.send(topscore);
};
exports.getAllTypeOfScore = async (req, res, next) => {
  const type_score = await topScoreM.getAllTypeOfScore();

  res.send(type_score);
};
