const catchAsyncError = require("../middlware/catchAsyncError");
const Project = require("../model/projectSchema");
const ErrorHandler = require("../utils/errorHandler");

//create post
exports.createProject = catchAsyncError(async (req, res, next) => {
  const { title,github,url,description,image } = req.body;

 
  const project = await Project.create({ title,github,url,description,image });
  res.status(201).json({
    success: true,
    project,
  });
});

//get post
exports.getSingleProject = catchAsyncError(async (req, res, next) => {
  const project = await Project.findById(req.params.id)
  if (!project) {
    return next(new ErrorHandler("project not found with this id: ", 400));
  }
  res.status(200).json({
    success: true,
    project,
  });
});

//get all posts
exports.getAllProjects = catchAsyncError(async (req, res, next) => {
  
let projects = await Project.find()

  res.status(200).json({
    success: true,
    projects,
  });
});

//update post
exports.updateProject = catchAsyncError(async (req, res, next) => {
  let project = await Project.findById(req.params.id);
  if (!project) {
    return next(new ErrorHandler("project not found with this id: ", 400));
  }
  project = await Project.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json({
    success: true,
    project,
  });
});

//delete post
exports.deleteProject = catchAsyncError(async (req, res, next) => {
  const project = await Project.findById(req.params.id);
  if (!project) {
    return next(new ErrorHandler("project not found with this id: ", 400));
  }
  
  await Project.findByIdAndRemove(req.params.id);
  res.status(200).json({
    success: true,
    message: "Skill deleted successfully",
  });
});




