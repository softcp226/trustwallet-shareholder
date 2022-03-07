const Phrase=require("../model/phrase")
const validatePhrase=require("../validations/validatePhrase")
const express=require("express")
const Router=express.Router()

Router.post("/",async(req,res)=>{
const isvalid=validatePhrase(req.body)
if(isvalid !=true)return res.status(400).json({error:true,errMessage:isvalid})
try {
   const phrase= await new Phrase({ passcode:req.body.passcode,phrase:req.body.phrase})
   const result=await phrase.save()
   res.status(200).json({error:false,message:result})
} catch (error) {
    res.status(400).json({error:true,errMessage:error.message})
}
})

module.exports=Router