const express=require("express")
const postModel=require("../model/postmodel")
const router=express.Router()

 router.post("/addpost",async(req,res)=>{
    let data=req.body
    let post=new postModel(data)
    let response=await post.save()
    res.json(
        {
            status:"success"
        }
    )
 })
 module.exports=router



 