const express = require("express");
const router = express.Router();
const topScoreC = require("../controllers/topScore.c");
const { get } = require("./rank.r");

router.route("/topGoal").get(topScoreC.getAllTopScore);
router.route("/typeofscore").get(topScoreC.getAllTypeOfScore);

module.exports = router;
