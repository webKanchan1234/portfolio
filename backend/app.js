const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cookieParser=require("cookie-parser")
const cors=require("cors")
const dotenv=require("dotenv")
const skill = require("./route/skillsRoute")
const project = require("./route/projectRoute")
const user = require("./route/userRoute")
// const fileUpload = require("express-fileupload")
const errorMiddleware = require("./middlware/error")
const path = require("path");

// if (process.env.NODE_ENV !== "PRODUCTION") {
//   require("dotenv").config({ path: "backend/config/config.env" });
// }

if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

// app.use(express.json())

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:true}))
app.use("/backend/files",express.static("files"))
// app.use(fileUpload())


app.use(cors())

// app.use("*",cors())



app.use("/api/v1",skill)
app.use("/api/v1",project)
app.use("/api/v1",user)

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

app.use(errorMiddleware)

module.exports = app
// arQnumUzQjXnweev

// mongodb+srv://kanchanportfolio:Kanchan123...@cluster0.bkav9hi.mongodb.net/portfolio?retryWrites=true&w=majority&appName=Cluster0