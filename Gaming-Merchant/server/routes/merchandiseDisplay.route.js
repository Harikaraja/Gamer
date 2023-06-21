const express = require("express");
const router = express.Router();
const {merchantDisplay} = require("../controllers/merchandiseDisplayControllers");


router.get("/display",merchantDisplay);

module.exports = router;