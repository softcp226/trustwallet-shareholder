const connector=(message)=>{

const mongoose=require("mongoose")
const config=require("config")
const db_url=config.get("db_Url")
// console.log(db_url)
mongoose.connect(db_url)
.then(()=>console.log(message))
.catch(err=>console.log(err.message))


}

module.exports=connector