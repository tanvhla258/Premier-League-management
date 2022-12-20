const topScoreM = require("../models/topScore.m");

exports.getAllTopScore = async (req, res, next) => {
  const score = await topScoreM.getAllTopScore();
  var topscore = [];
  for (let i = 0; i < score.length; i++) {
    var clubName = await topScoreM.getClubNameByClubID(
      score[i].CAU_THU_DOI_BONG_ID_Doi_Bong
    );
    var playerName = await topScoreM.getPlayerNameByPlayerID(
      score[i].CAU_THU_ID_Cau_Thu
    );
    topscore[i] = {
      Ten_CT: playerName[0].Ten_CT,
      Ten_DB: clubName[0].Ten_DB,
      So_Ban_Thang: score[i].So_Ban_Thang,
    };
  }

  res.send(topscore);
};
