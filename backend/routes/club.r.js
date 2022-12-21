const express = require("express");
const router = express.Router();
const clubC = require("../controllers/club.c");
const { post } = require("./user.r");

router.route("/").get(clubC.getClubs).post(clubC.createClub);

router
  .route("/:clubId")
  .get(clubC.getAClub)
  .delete(clubC.deleteAClub)
  .put(clubC.updateAClub);

router.post("/search", clubC.findAClub);

router
  .route("/:clubId/players")
  .get(clubC.getAllPlayersInClub)
  .post(clubC.addPlayerToClub);

router
  .route("/:clubId/players/:playerId")
  .get(clubC.getOnePlayerInClub)
  .put(clubC.updateOnePlayerInClub)
  .delete(clubC.deleteOnePlayerInClub);

router.post("/:clubId/players/search", clubC.searchOnePlayerInCLub);

module.exports = router;
