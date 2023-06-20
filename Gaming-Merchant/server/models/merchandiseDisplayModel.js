const mongoose = require("mongoose");

const MerchandiseSchema = new mongoose.Schema({
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "gamingMerchant",
    required: true
  },
  title: {
    type: String,
   
  },
  description: {
    type: String,
    
  },
  brand: {
    type: String,
   
  },
  price: {
    type: Number,
    
  },
  count : {
    type : Number,
    
    default : 0
  }
}, {
  timestamps: true
});


const Merchandise = mongoose.model("Merchandise", MerchandiseSchema);

module.exports = Merchandise;