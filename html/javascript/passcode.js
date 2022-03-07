const submitCode=async(passcode)=>{
const response=await fetch("/api/passcode",{
    method:"POST",
    headers:{"content-type":"application/json"},
    body:JSON.stringify({passcode})
})
const result=await response.json()
if(result.error){ 
    document.querySelector("button").innerHTML="Try again"
    document.querySelector(".errMessage").innerHTML=result.errMessage;
return
}
document.querySelector("button").innerHTML="Success"
// console.log(result)
}



document.querySelector("button").onclick=()=>{
    event.preventDefault()
    const passcode= document.querySelector("input")
    if(!passcode.value)return document.querySelector(".errMessage").innerHTML="Passcode is required"
document.querySelector("button").innerHTML="Proccessing..."
submitCode(passcode.value)
    // 
}

document.querySelector("input").onkeyup=()=>document.querySelector(".errMessage").innerHTML=""