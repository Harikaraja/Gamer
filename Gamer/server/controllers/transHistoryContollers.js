const transaction = require("../models/transHistoryModel");

//console.log(transaction);
exports.additem = async (req, res) => {
  try {
    const { orderStatus } = req.body;
    console.log(orderStatus);
    
    const createTransaction = await transaction.create( {orderStatus} );
  
    res.status(200).send({ msg: "Transaction stored successfully" });

  } catch (error) {
    console.log(error);
  }
};

exports.displayitem = async (req, res) => {
  try {
    const transactions = await transaction.find();
    console.log("transaction is:")
    console.log(transactions);
  
    res.status(200).send({transactions,status:true, msg: "Products displayed successfully" });
  } catch (error) {
    res.status(500).json({ error: `Internal server error ${error}` });
  }
};
