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
 router.get("/viewall",async(req,res)=>{
    let data=await postModel.find()
    .populate("userId","name age phoneno pin email -_id")
    .exec()
    res.json(data)
 })
 module.exports=router



 