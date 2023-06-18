const {Schema, model} =   require("mongoose");
const bcrypt = require("bcrypt");

const gamerSchema = new Schema({
   firstName:{
      type: String,
      
   },
   lastName:{
    type: String,
    
   },
   dob:{
     type:Date,
    
   },
   password: {
      type: String,
      
   },
    email: {
        type: String,
       
        unique:true
    },
    phoneNumber: {
        type: String,
       
        unique:true,
    },
    gender: {
        type: String,
    },
    verified:{
        type:Boolean,
        default:false
    }
   },
   {timestamp:true}
   )

   gamerSchema.pre('save', async function(next){
    const user = this;
    if(!user.isModified("password")) return next();
    user.password = bcrypt.hash(user.password,10);
    next();
   })
  
   //now create a collection inside the database

   const gamer = new model("gamer",gamerSchema);
   
   module.exports=gamer;