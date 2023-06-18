const express = require("express");
const router = express.Router();
const {wallet} = require("../controllers/walletControllers.js");
const {RegisterValidations,AuthenticateValidations} = require("../utils/validation.js")
const { validationMiddleware } = require("../middleware/validator.js")

router.post("/",wallet);

module.exports = router;