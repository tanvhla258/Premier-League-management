const express = require("express");
const router = express.Router();
const matchC = require("../controllers/match.c");

router.route("/").get(matchC.getAllMatches).post(matchC.createAMatch);
router
  .route("/:id")
  .get(matchC.getAMatch)
  .put(matchC.updateAMatch)
  .delete(matchC.deleteAMatch);
router.post("/search", matchC.searchAMatch);

// router.route("/:id/goals/").get(getAllGoals).post(createAGoal);
// router.route("/:id/goals/:goalId").put(updateAGoal).delete(deleteAGoal);

module.exports = router;
