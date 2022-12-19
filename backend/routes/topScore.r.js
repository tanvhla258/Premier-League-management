const express = require("express");
const router = express.Router();
const topScoreC = require("../controllers/topScore.c");
const { get } = require("./rank.r");

router.route("/").get(topScoreC.getAllTopScore);

module.exports = router;
