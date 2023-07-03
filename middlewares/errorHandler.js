const {constants}=require('../constants')
const errorHandler=(err,req,res,next)=>{
    const statusCode=res.statusCode?res.statusCode:500
    switch(statusCode){
        case constants.VALIDATION_ERROR:
            res.send({title:"Validation failed",message:err.message})
            break
        case constants.UNAUTHORIZED:
            res.send({title:"Unauthorized",message:err.message})
            break
        case constants.FORBIDDEN:
            res.send({title:"Forbidden",message:err.message})
            break
        case constants.NOT_FOUND:
            res.send({title:"Not found",message:err.message})
            break;
        case constants.SERVER_ERROR:
            res.send({title:"Server error",message:err.message})
            break
        default:
            console.log("No error");
            break;
    }
    
};

module.exports=errorHandler
