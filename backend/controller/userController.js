const catchAsyncError = require("../middlware/catchAsyncError")
const User = require("../model/userSchema")
const ErrorHandler = require("../utils/errorHandler")
const sendEmail = require("../utils/sendEmail")
const crypto = require("crypto");
const sendEmail2 = require("../utils/sendEmail2");
const multer = require("multer")


//sign up user
exports.signUpUser = catchAsyncError(async(req,res,next)=>{
    const {name,email,password} = req.body
   
    const image="image"
    const user = await User.create({
        name,email,password,image
    })
    const token= user.generateToken()
    const options = {
        expires: new Date(
          Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
    };
    
    res.status(201).cookie("token",token,options).json({
        success:true,
        user,
        token
    })
    
})

//login user
exports.loginUser = catchAsyncError(async(req,res,next)=>{
    const {email,password} = req.body
    const user=await User.findOne({email:email})

    if(user==="" || password===""){
        return next(new ErrorHandler("Please enter email or password: ",400))
    }
    if(!user){
        return next(new ErrorHandler("User not found with this id: ",400))
    }
    const isPasswordMatch= await user.passwordMatch(password)
    if(!isPasswordMatch){
        return next(new ErrorHandler("Email or password is incorrect ",400))
    }

    const token = user.generateToken()
    const options = {
        expires: new Date(
          Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
    };
    
    res.status(200).cookie("token",token,options).json({
        success:true,
        user,
        token
    })
})

//logout user
exports.logoutUser = catchAsyncError(async(req,res,next)=>{
    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
      });
    
      res.status(200).json({
        success: true,
        message: "Logged Out successfully",
    });
})

//forgot password
exports.forgotPassword = catchAsyncError(async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email });
  
    if (!user) {
      return next(new ErrorHandler("User not found", 404));
    }
  
    // Get ResetPassword Token
    const resetToken = user.getResetPasswordToken();
  
    await user.save({ validateBeforeSave: false });
  
    const resetPasswordUrl = `${req.protocol}://${req.get("host")}/password/reset/${resetToken}`;
  
    const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\nIf you have not requested this email then, please ignore it.`;
  
    try {
      await sendEmail({
        email: user.email,
        subject: `Ecommerce Password Recovery`,
        message,
      });
  
      res.status(200).json({
        success: true,
        message: `Email sent to ${user.email} successfully`,
      });
    } catch (error) {
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;
  
      await user.save({ validateBeforeSave: false });
  
      return next(new ErrorHandler(error.message, 500));
    }
  });

  // Reset Password
exports.resetPassword = catchAsyncError(async (req, res, next) => {
    // creating token hash
    const resetPasswordToken = crypto
      .createHash("sha256")
      .update(req.params.token)
      .digest("hex");
  
    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });
  
    if (!user) {
      return next(
        new ErrorHandler(
          "Reset Password Token is invalid or has been expired",
          400
        )
      );
    }
  
    if (req.body.password !== req.body.confirmPassword) {
      return next(new ErrorHandler("Password does not match", 400));
    }
  
    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    const token = user.generateToken()
    const options = {
        expires: new Date(
          Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
    };
    await user.save();
    res.status(200).cookie("token",token,options).json({
        success:true,
        user,
        token
    })
});

//get users
exports.allUsers = catchAsyncError(async(req,res,next)=>{
    const users = await User.find()
    res.status(200).json({
        success:true,
        users
    })
})

//get user details
exports.userDetails = catchAsyncError(async(req,res,next)=>{
    const user = await User.findById(req.user.id)
    
    res.status(200).json({
        success:true,
        user
    })
})

//get single user
exports.getSingleUser = catchAsyncError(async(req,res,next)=>{
    const user = await User.findById(req.params.id)
    
    if(!user){
        return next(new ErrorHandler("User not found with this id: ",400))
    }
    res.status(200).json({
        success:true,
        user
    })
})

//update password
exports.updatePassword = catchAsyncError(async(req,res,next)=>{
  const user = await User.findById(req.user.id).select("+password");

  const isPasswordMatched = await user.passwordMatch(req.body.oldPassword);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Old password is incorrect", 400));
  }

  if (req.body.newPassword !== req.body.confirmPassword) {
    return next(new ErrorHandler("password does not match", 400));
  }

  user.password = req.body.newPassword;
  const token = user.generateToken()
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  await user.save();
  res.status(200).cookie("token",token,options).json({
    success:true,
    user,
    token
  })
})


//update user details
exports.updateUserDetails = catchAsyncError(async(req,res,next)=>{
    let user = await User.findById(req.params.id)
    if(!user){
        return next(new ErrorHandler("User not found with this id: ",400))
    }
    user=await User.findByIdAndUpdate(req.params.id,req.body,{
        new:true
    })
    await user.save()
    res.status(200).json({
        success:true,
        user
    })
})


//update user details
exports.deleteUser = catchAsyncError(async(req,res,next)=>{
    let user = await User.findById(req.params.id)
    if(!user){
        return next(new ErrorHandler("User not found with this id: ",400))
    }
    
    await User.findByIdAndRemove(req.params.id)
    res.status(200).json({
        success:true,
        message:"User Deleted successfully"
    })
})


//contact us
exports.contactUs = catchAsyncError(async (req, res, next) => {

  const {name,email,mobile,message,link}=req.body
  const obj={
    name:name,
    email:email,
    mobile:mobile,
    message:message,
    link:link
  }
  // console.log(obj)
  // Get ResetPassword Token
  let stringMessage = JSON.stringify(obj);
  // console.log(stringMessage)
  try {
    await sendEmail2({
      email:email,
      subject: `Contact with you`,
      stringMessage,
    });

    res.status(200).json({
      success: true,
      message: `Message send successfully`,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
});


exports.uploadResume = catchAsyncError(async(req,res,next)=>{
  const pdf=req.file.filename
  // console.log(pdf)
  req.user.resume=pdf
  req.user.save()
  res.status(200).json({
    success: true,
    message: `upload successfully`,
  });
})

exports.getResume = catchAsyncError(async(req,res,next)=>{
  const user = await User.findOne(req.email)
  const file = user.resume;
  //  console.log(file)
  res.download(`./backend/files/${file}`, 'resume.pdf', (err) => {
    if (err) {
      // Handle error (e.g., file not found, permissions issue)
      console.error('Error downloading file:', err);
      res.status(500).send('Error downloading file');
    }
  });
  
})