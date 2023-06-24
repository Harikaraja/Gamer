const express = require("express");
const router = express.Router();
const { getProfile } = require("../controllers/profileController");
const { verifyToken} = require("../middleware/auth.js")

router.get("/",verifyToken,getProfile)

module.exports = router;