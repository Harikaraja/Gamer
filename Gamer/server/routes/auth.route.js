const express = require("express");
const router = express.Router();
const { signup, login ,verifyOtp, sendVerificationEmail,addProfilepic} = require("../controllers/authControllers.js");
const {RegisterValidations,AuthenticateValidations} = require("../utils/validation.js")
const { validationMiddleware } = require("../middleware/validator.js")
const { imageMiddleware } = require("../middleware/imageMiddleware");
const { verifyToken } = require("../middleware/auth");

router.post("/register",RegisterValidations,validationMiddleware,signup);
router.post("/login",AuthenticateValidations,validationMiddleware,login);
router.post("/verifyotp",verifyOtp);
router.post("/getotp",sendVerificationEmail)
//router.post('/add',verifyToken,imageMiddleware,addProfilepic);
// router.post("/resendotp",resendOtp);

module.exports = router;
