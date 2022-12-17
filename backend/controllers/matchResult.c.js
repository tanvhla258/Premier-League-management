const matchResultM = require("../models/matchResult.m")

exports.getAllMatchResult = async (req, res, next) => {

    const matchResult = await matchResultM.getAllMatchResult();
    console.log(matchResult);
    res.send(matchResult);
}

exports.createMatchResult = async (req, res, next) => {
    const matchResult = req.body;
    await matchResultM.createMatchResult(matchResult)
    res.send("create match result success")
}
exports.getOneMatchResult = async (req, res, next) => {
    const id = req.param.id;
    const matchresult = await matchResultM.getOneMatchResult(id);
    res.send(matchresult)

}
exports.updateOneMatchResult = async (req, res, next) => {
    const matchresult = req.body;

    res.send(await matchResultM.updateMatchResult(matchresult))
}