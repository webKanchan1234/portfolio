const express = require("express")
const { signUpUser, loginUser, allUsers, userDetails, updateUserDetails, deleteUser, logoutUser, getSingleUser, forgotPassword, resetPassword, contactUs, updatePassword, uploadResume, getResume } = require("../controller/userController")
const { isAuthenticated, isAuthorizedRoles } = require("../middlware/auth")
const router = express.Router()
const multer = require("multer")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './backend/files')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now()
      cb(null, uniqueSuffix+file.originalname)
    }
  })
  
// const upload = multer({ dest: './backend/files' })
const upload = multer({storage:storage})

router.post("/users/signup",signUpUser)
router.post("/users/login",loginUser)
router.get("/users/logout",logoutUser)
router.post("/password/forget",forgotPassword)
router.put("/password/reset/:token",resetPassword);
router.post("/contact-us",contactUs);
router.get("/users",allUsers)
router.get("/user/me",isAuthenticated,userDetails)
router.get("/users/:id",isAuthenticated,getSingleUser)
router.put("/users/:id",isAuthenticated,updateUserDetails)
router.put("/password/update",isAuthenticated,updatePassword)
router.delete("/users/:id",isAuthenticated,isAuthorizedRoles("admin"),deleteUser)
router.post("/upload/files",isAuthenticated,isAuthorizedRoles("admin"),upload.single("file"),uploadResume)
router.get("/get/files",getResume)


module.exports = router