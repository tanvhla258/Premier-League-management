const rankM = require("../models/rank.m")
exports.getRank = async (req, res, next) => {
    const rank = await rankM.getAllRank();
    res.send(rank)
}