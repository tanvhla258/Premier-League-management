const express = require("express");
const router = express.Router();
const userC = require("../controllers/user.c");
const passport = require("passport");

router.post("/register", userC.Register);
router.post("/login", userC.Login);

router.get("/", userC.getAll);
router.get("/:id", userC.getOne);
router.delete("/:id", userC.DeleteOne);
router.patch("/:id", userC.UpdateOne);

module.exports = router;
