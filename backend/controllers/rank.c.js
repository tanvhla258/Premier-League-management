const rankM = require("../models/rank.m");
exports.getRank = async (req, res, next) => {
  const rank = await rankM.getAllRank();
  var matchesByName = [];
  for (let i = 0; i < rank.length; i++) {
    var team = await rankM.getNameByID(rank[i].DOI_BONG_ID_Doi_Bong);
    matchesByName[i] = {
      ID_BXH: rank[i].ID_BXH,
      Hang: rank[i].Hang,
      Thang: rank[i].Thang,
      Hoa: rank[i].Hoa,
      Thua: rank[i].Thua,
      Tong_Diem: rank[i].Tong_Diem,
      DOI_BONG_ID_Doi_Bong: rank[i].DOI_BONG_ID_Doi_Bong,
      Ten_DB: team[0].Ten_DB,
      GIAI_DAU_ID_Giai_Dau: rank[i].GIAI_DAU_ID_Giai_Dau,
    };
  }
  res.send(matchesByName);
};
