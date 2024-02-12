const express=require("express")
const signupmodel=require("../model/signupmodel")
const router=express.Router()
const bcrypt=require("bcrypt")


hashedpasswordgenerator=async(pass)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)

}
router.get("/viewall",async(req,res)=>{
    let data=await signupmodel.find()
    res.json(data)
 })

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
    router.post("/signin",async(req,res)=>{
        let input=req.body
        let email=req.body.email
        let data=await signupmodel.findOne({"email":email})

      
        console.log(data)
        let dbpassword=data.password
        let inputpassword=req.body.password
        console.log(dbpassword)
        console.log(inputpassword)
        const match=await bcrypt.compare(inputpassword,dbpassword)
        if(!match)
        {
            return res.json({
                status:"incorrect"
            })
        }
        else
        {
            res.json(
                {
                    status:"Success"
                }
            )
        }
    
    
})


module.exports=router
