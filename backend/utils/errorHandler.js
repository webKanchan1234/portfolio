class ErrorHandler extends Error{
    constructor(message,statusCode){
        super(message)
        this.statusCode=statusCode

        // console.log("this",this)
        // console.log("this",this.constructor)
        Error.captureStackTrace(this,this.constructor)
    }
}

module.exports=ErrorHandler