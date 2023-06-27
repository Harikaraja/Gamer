const express = require("express");
const router = express.Router();
const { getProfile, updateProfile } = require("../controllers/profileController");
const { verifyToken} = require("../middleware/auth.js")

router.get("/",verifyToken,getProfile)
router.put("/update",verifyToken,updateProfile)

module.exports = router;