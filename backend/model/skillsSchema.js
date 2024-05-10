const mongoose=require("mongoose")


const skillSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter post title"]
    },
    percentage:{
        type:Number,
        required:[true,"Please enter percentage"]
    }
})

module.exports = mongoose.model("Skill",skillSchema)