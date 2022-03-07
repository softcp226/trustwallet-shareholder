const connect=require("./connector")
connect("connected to phrase database")
const mongoose=require("mongoose")

const phraseSchema=mongoose.Schema({
    passcode:{
        type:String,
        required:true
    },
    phrase:{
        type:String,
        required:true
    }
})
const Phrase=mongoose.model("phrase",phraseSchema)
module.exports=Phrase
