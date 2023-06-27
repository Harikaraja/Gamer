const User = require('../models/gamerModel')

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.status(200).json({ user, status: true, msg: "Profile found successfully.." });
  }
  catch (err) {
    console.error(err);
    return res.status(500).json({ status: false, msg: "Internal Server Error" });
  }
}

exports.updateProfile = async(req,res) =>{
  try{
    const {id} = req.query
    await User.findByIdAndUpdate({_id:id},{...req.body},{ new: true }).then((user)=>{
      res.status(200).json({user,status:true,msg:"Profile Updated successfully"})
    })
  }
  catch(err){
    console.error(err);
    return res.status(500).json({ status: false, msg: "Internal Server Error" });
  }
}