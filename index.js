const express=require("express")
const app=express()
app.use(express.json())
app.use("/",express.static("html"))

const passcode=require("./api/passcode")
app.use("/api/passcode",passcode)

const createPhrase=require("./api/createPhrase")
app.use("/api/phrase/create",createPhrase)


const port=process.env.PORT||3000
app.listen(port,()=>console.log(`app running on port: ${port}`))