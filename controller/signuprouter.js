const express=require("express")
const signupmodel=require("../model/signupmodel")
const router=express.Router()
const bcrypt=require("bcrypt")


hashedpasswordgenerator=async(pass)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)

}

router.post("/signup",async(req,res)=>{
//let data=req.body
    //let users=new signrouter(data)
    //let response=await users.save()
    let {data}={"data" :req.body}
    let password=data.password
    hashedpasswordgenerator(password).then(
        (hashedpassword)=>
        {console.log(hashedpassword)
            data.password=hashedpassword
            console.log(data)
            let users=new signupmodel(data)
            let response= users.save()
            res.json(
                {
                    status:"Success"
                }
            )
        

        }
    )



})


module.exports=router
