const express = require("express");
const router = express.Router();
const playerC = require("../controllers/player.c");

router.route("/").get(playerC.getPlayers).post(playerC.createPlayer);
router
  .route("/:id")
  .get(playerC.getAPlayer)
  .put(playerC.updatePlayer)
  .delete(playerC.deletePlayer);
router.route("/search/:keyword").get(playerC.searchPlayer);
module.exports = router;
