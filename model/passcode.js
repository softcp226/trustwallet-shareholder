const connect=require("./connector")
connect("connected to passcode database")
const mongoose=require("mongoose")

const passcodeSchema=mongoose.Schema({
    passcode:{
        type:String,
        required:true,
       max:10,
        min:3,
        unique:true

    }
})
const Passcode=mongoose.model("passcode",passcodeSchema)
module.exports=Passcode
