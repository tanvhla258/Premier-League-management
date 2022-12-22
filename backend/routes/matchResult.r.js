const express = require("express");
const router = express.Router();
const matchResultC = require("../controllers/matchResult.c");

router
  .route("/")
  .get(matchResultC.getAllMatchResult)
  .post(matchResultC.createMatchResult);
router
  .route("/:id")
  .get(matchResultC.getOneMatchResult)
  .put(matchResultC.updateOneMatchResult);

module.exports = router;
