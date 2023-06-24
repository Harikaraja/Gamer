const Merchandise = require("../models/merchandiseDisplayModel");


exports.merchantDisplay = async (req, res) => {
    try {
        
      const merchant = await Merchandise.find();
      console.log(merchant);
  
      res.status(200).send({merchant,status:true,msg:"Products Displayed Successful"})
  
    }
    catch (error) {
      
        res.status(500).json({ error: `Internal server error ${error}` });
      
    }
}