const catchAsyncError = require("../middlware/catchAsyncError");
const Skills = require("../model/skillsSchema");
const ErrorHandler = require("../utils/errorHandler");

//create post
exports.createSkill = catchAsyncError(async (req, res, next) => {
  const { name,percentage } = req.body;

 
  const skill = await Skills.create({
    name,percentage
  });
  res.status(201).json({
    success: true,
    skill,
  });
});

//get post
exports.getSingleSkill = catchAsyncError(async (req, res, next) => {
  const skill = await Skills.findById(req.params.id)
  if (!skill) {
    return next(new ErrorHandler("Skill not found with this id: ", 400));
  }
  res.status(200).json({
    success: true,
    skill,
  });
});

//get all posts
exports.getAllSkills = catchAsyncError(async (req, res, next) => {
  
let skills = await Skills.find()

  res.status(200).json({
    success: true,
    skills,
  });
});

//update post
exports.updateSkill = catchAsyncError(async (req, res, next) => {
  let skill = await Skills.findById(req.params.id);
  if (!skill) {
    return next(new ErrorHandler("skill not found with this id: ", 400));
  }
  skill = await Skills.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json({
    success: true,
    skill,
  });
});

//delete post
exports.deleteSkill = catchAsyncError(async (req, res, next) => {
  const skill = await Skills.findById(req.params.id);
  if (!skill) {
    return next(new ErrorHandler("skill not found with this id: ", 400));
  }
  
  await Skills.findByIdAndRemove(req.params.id);
  res.status(200).json({
    success: true,
    message: "Skill deleted successfully",
  });
});




