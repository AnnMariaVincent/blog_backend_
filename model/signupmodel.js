const mongoose=require("mongoose");
const signupmodel=new mongoose.Schema({
    name:String,
    age:String,
    phoneno:String,
    pin:String,
    email:String,
    password:String
   


})

module.exports=mongoose.model("signup",signupmodel);