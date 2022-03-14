const Joi=require("joi")

const validatePcode=(req)=>{
    const schema=Joi.object({
        passcode:Joi.string().required().max(10).min(6)
    })

    const result=schema.validate({passcode:req.passcode})
    if(result.error)return result.error.message;
    return true
}

module.exports=validatePcode