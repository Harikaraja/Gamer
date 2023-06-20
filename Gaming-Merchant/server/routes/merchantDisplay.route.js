const express = require("express");
const router = express.Router();
const {merchantDisplay} = require("../controllers/merchantDisplayControllers");


router.get("/display",merchantDisplay);

module.exports = router;