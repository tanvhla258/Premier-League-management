const express = require("express");
const router = express.Router();
const clubC = require("../controllers/club.c");
const { post } = require("./user.r");

router.route("/").get(clubC.getClubs).post(clubC.createClub);

router
  .route("/:id")
  .get(clubC.getAClub)
  .delete(clubC.deleteAClub)
  .put(clubC.updateAClub);

router.post("/search", clubC.findAClub);

router
  .route("/:id/players")
  .get(clubC.getAllPlayersInClub)
  .post(clubC.addPlayerToClub);

router
  .route("/:id/players/:playerId")
  .get(clubC.getOnePlayerInClub)
  .put(clubC.updateOnePlayerInClub)
  .delete(clubC.deleteOnePlayerInClub);

router.post("/:id/players/search", clubC.searchOnePlayerInCLub);

module.exports = router;
