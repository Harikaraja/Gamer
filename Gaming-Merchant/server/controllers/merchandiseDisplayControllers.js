const Merchandise = require("../models/merchandiseDisplayModel");


exports.merchantDisplay = async (req, res) => {
    try {
        
      const allMerchandise = await Merchandise.find();
      console.log(allMerchandise);
  
      res.status(200).send({msg:"Products Displayed Successful"})
  
    }
    catch (error) {
      
        res.status(500).json({ error: `Internal server error ${error}` });
      
    }
}