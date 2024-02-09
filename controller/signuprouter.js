const express=require("express")
const signupmodel=require("../model/signupmodel")
const router=express.Router()

router.post("/signup",async(req,res)=>{
    let data=req.body
    let signup=new signupmodel(data)
    let result=await signup.save()
    res.json({
        status:"success"
    })
})


module.exports=router
