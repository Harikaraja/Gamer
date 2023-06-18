const wallet = require("../models/walletModel");

exports.wallet = async (req, res) => {
    try {
      const {userId,gamerId,num_of_tokens} = req.body;
  
      const createwallet =await wallet.create({userId,gamerId,num_of_tokens})
  
      res.status(200).send({msg:"wallet created Successful"})
  
      }
  catch (error) {
    console.log(error);
  }
  }