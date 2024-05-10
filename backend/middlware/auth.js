const User = require("../model/userSchema");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("./catchAsyncError");
const jwt = require("jsonwebtoken")


exports.isAuthenticated = catchAsyncError(async(req,res,next)=>{
    const {token} = req.cookies
    if(!token){
        return next(new ErrorHandler("Please login to access these resources!"))
    }
    const decode = jwt.verify(token,process.env.JWT_SECRET)
    // console.log(decode)
    req.user= await User.findById(decode.id)
    // console.log(req.user)
    next()
})

exports.isAuthorizedRoles = (...roles)=>{
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
          return next(
            new ErrorHandler(
              `Role: ${req.user.role} is not allowed to access this resouce `,
              403
            )
          );
        }
    
        next();
    };
}