const express = require("express");
const router = express.Router();
const userM = require("../controllers/userC");
router.get("/login", pageLogin);
router.post("/login", userLogin);
router.get("/register", pageRegister);
router.post("/register", userRegister);
router.get("/", home);
module.exports = router;
