const {constants} = require("../constants")
const errorHandler = (err,req,res,next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;

    // Changing error title based on status code
    switch(statusCode){
        case constants.VALIDATION_ERROR:
            res.json({
                title:"Validation Failed",
                message: err.message, 
                stackTrace:err.stack // Error Stack Trace for Developers
            })
            break;
        case constants.NOT_FOUND:
            res.json({
                title:"Not Found",
                message: err.message, 
                stackTrace:err.stack // Error Stack Trace for Developers
            })
            break;
        case constants.UNAUTHORIZED:
            res.json({
                title:"Unorthorized",
                message: err.message, 
                stackTrace:err.stack // Error Stack Trace for Developers
            })
            break;
        case constants.FORBIDDEN:
            res.json({
                title:"Forbidden",
                message: err.message, 
                stackTrace:err.stack // Error Stack Trace for Developers
            })
            break;
        case constants.SERVER_ERROR:
            res.json({
                title:"Server error",
                message: err.message, 
                stackTrace:err.stack // Error Stack Trace for Developers
            })
            break;
        default:
            console.log("No error, All good !")
            break;
    }
            
};
module.exports = errorHandler