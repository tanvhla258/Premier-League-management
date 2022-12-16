const express = require("express");
const router = express.Router();
const rankC = require("../controllers/rank.c");

router.route("/").get(rankC.getRank);
