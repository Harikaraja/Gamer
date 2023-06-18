const wallet = require("../models/walletModel");
const User = require("../models/gamerModel");
exports.wallet = async (req, res) => {
    try {
      const {gamerId,num_of_tokens} = req.body;

      const {userId} = await User.findById(req.query.uid)
  
      const createwallet =await wallet.create({userId,gamerId,num_of_tokens})
  
      res.status(200).send({msg:"wallet created Successful"})
  
      }
  catch (error) {
    console.log(error);
  }
  }