const express=require("express")
const Router=express.Router()
const Passcode=require("../model/passcode")
const validatePasscode=require("../validations/validatePasscode")

Router.post("/",async(req,res)=>{
const isvalid=validatePasscode(req.body)
if(isvalid !=true)return res.status(400).json({error:true,errMessage:isvalid})

try {
   const passcode= await Passcode.findOne({passcode:req.body.passcode})
   if(passcode)return res.status(400).json({error:true,errMessage:"Something went wrong!,please try a diffrent code"});
  const code= await new Passcode({passcode:req.body.passcode})
  const result=await code.save()
   res.status(200).json({error:false,message:"Success!, you created a new passcode"})
} catch (error) {
   res.status(400).json({error:true,errMessage:error.message})
}

})


Router.post("/verifyCode",async(req,res)=>{
   const isvalid=validatePasscode(req.body)
if(isvalid !=true)return res.status(400).json({error:true,errMessage:isvalid})
try {
   const passcode= await Passcode.findOne({passcode:req.body.passcode})
   // console.log(passcode)
if(!passcode)return res.status(400).json({error:true,errMessage:"invalid passcode, please try again"});
res.status(200).json({error:false,message:"success, passcode found"})
   
} catch (error) {
  res.status(400).json({error:true,errMessage:error.message}) 
}
})


module.exports=Router