const matchResultM = require("../models/matchResult.m");
const clubM = require("../models/club.m");
exports.getAllMatchResult = async (req, res, next) => {
  const matchResult = await matchResultM.getAllMatchResult();
  var matchParticular = [];
  for (let i = 0; i < matchResult.length; i++) {
    var playerNameScore = [];

    var stadium = await matchResultM.getStadiumByHomeID(
      matchResult[i].TRAN_DAU_DOI_BONG_ID_Doi_Bong_1
    );
    var datetime = await matchResultM.getTimeByMatchID(
      matchResult[i].TRAN_DAU_ID_Tran_Dau
    );
    var score = await matchResultM.getScore(
      matchResult[i].TRAN_DAU_ID_Tran_Dau
    );
    for (let j = 0; j < score.length; j++) {
      const name = await matchResultM.getScorePlayerAndClub(
        score[j].CAU_THU_ID_Cau_Thu
      );
      playerNameScore[j] = {
        ten_cau_thu: name[0].Ten_CT,
        doi_bong: name[0].Ten_DB,
        Thong_tin_ban_thang: score[j],
      };
    }

    var logo1 = await clubM.getLogoByName(matchResult[i].Ten_Doi_Thang);
    var logo2 = await clubM.getLogoByName(matchResult[i].Ten_Doi_Thua);

    matchParticular[i] = {
      Ten_Doi_Thang: matchResult[i].Ten_Doi_Thang,
      Logo_Doi_Thang: logo1,
      Ten_Doi_Thua: matchResult[i].Ten_Doi_Thua,
      Logo_Doi_Thua: logo2,
      TRAN_DAU_ID_Tran_Dau: matchResult[i].TRAN_DAU_ID_Tran_Dau,
      Player_Score: playerNameScore,
      TRAN_DAU_DOI_BONG_ID_Doi_Bong_1:
        matchResult[i].TRAN_DAU_DOI_BONG_ID_Doi_Bong_1,
      TRAN_DAU_DOI_BONG_ID_Doi_Bong_2:
        matchResult[i].TRAN_DAU_DOI_BONG_ID_Doi_Bong_2,
      TRAN_DAU_GIAI_DAU_ID_Giai_Dau:
        matchResult[i].TRAN_DAU_GIAI_DAU_ID_Giai_Dau,
      Ti_So: matchResult[i].Ti_So,
      San: stadium[0].San_Nha,
      Ngay_gio: datetime[0].Lich_Thi_Dau,
    };
  }
  res.send(matchParticular);
};

exports.createMatchResult = async (req, res, next) => {
  const matchResult = req.body;
  await matchResultM.createMatchResult(matchResult);
  res.send("create match result success");
};
exports.getOneMatchResult = async (req, res, next) => {
  const id = req.param.id;
  const matchresult = await matchResultM.getOneMatchResult(id);
  res.send(matchresult);
};
exports.updateOneMatchResult = async (req, res, next) => {
  const matchresult = req.body;

  res.send(await matchResultM.updateMatchResult(matchresult));
};
