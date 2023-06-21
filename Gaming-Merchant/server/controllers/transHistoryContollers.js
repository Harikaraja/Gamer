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
    const allTransactions = await transaction.find();
    console.log(allTransactions);
  
    res.status(200).send({ msg: "Products displayed successfully" });
  } catch (error) {
    res.status(500).json({ error: `Internal server error ${error}` });
  }
};
