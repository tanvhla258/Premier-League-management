const { response } = require("express");
const matchM = require("../models/match.m")
exports.getAllMatchs = async (req, res, next) => {
    const matchs = await matchM.getAllMatchs();
    res.json(matchs)
}
exports.createAMatch = async (req, res, next) => {
    const match = req.body;
    await matchM.addMatch(match);
    res.send("create match success")

}

exports.getAMatch = async (req, res, next) => {
    const id = req.params.id;
    const match = await matchM.getOneMatch(id);
    res.json(match)
}

exports.updateAMatch = async (req, res, next) => {
    const match = req.body;

    res.json(await matchM.updateMatch(match));
}

exports.deleteAMatch = async (req, res, next) => {
    const id = req.params.id;
    await matchM.deleteMatch(id);
    res.send("delete match success")
}

exports.searchAMatch = async (req, res, next) => {

}

// exports.getAllGoals = async (req, res, next) => {

// }

// exports.createAGoal = async (req, res, next) => {

// }

// exports.updateAGoal = async (req, res, next) => {

// }

// exports.deleteAGoal = async (req, res, next) => {

// }
