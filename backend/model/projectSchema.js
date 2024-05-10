const mongoose=require("mongoose")


const projectSchema= new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Please enter post title"]
    },
    github:{
        type:String
    },
    url:{
        type:String,
    },
    description:{
        type:String,
        required:[true,"Please enter project description"]
    },
    image:{
        type:String,
        required:[true,"Please upload project image"]
    },
   
})

module.exports = mongoose.model("Project",projectSchema)