const Joi=require("joi")

const validatePcode=(req)=>{
    const schema=Joi.object({
        passcode:Joi.string().required(),
        phrase:Joi.string().required()
    })

    const result=schema.validate({phrase:req.phrase,passcode:req.passcode})
    if(result.error)return result.error.message;
    return true
}

module.exports=validatePcode