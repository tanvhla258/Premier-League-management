const express = require("express")
const router = express.Router();
const clubC = require("../controllers/club.c");
const { post } = require("./user.r");

router.get("/", clubC.getClubs)
router.post("/", clubC.createClub)
router.put("/", clubC.updateClub)
router.delete("/", clubC.deleteClub)

router.get("/:id", clubC.getAClub)
router.delete("/:id", clubC.deleteAClub)
router.put("/:id", clubC.updateClub)


router.post("/search", clubC.findAClub)


router.get("/:id/players", clubC.getAllPlayersInClub)
router.post("/:id/players", clubC.addPlayerToClub)
router.get("/:id/players/:playerId", clubC.getOnePlayerInClub)
router.put("/:id/players/:playerId", clubC.updateOnePlayerInClub)
router.delete("/:id/players/:playerId", clubC.deleteOnePlayerInClub)
router.post("/:id/players/search", clubC.searchOnePlayerInCLub)

module.exports = router