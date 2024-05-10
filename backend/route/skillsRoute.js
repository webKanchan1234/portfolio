const express = require("express")
const { isAuthenticated, isAuthorizedRoles } = require("../middlware/auth")
const { createSkill, getSingleSkill, getAllSkills, updateSkill, deleteSkill } = require("../controller/skillsController")
const router = express.Router()


router.post("/add-skill",isAuthenticated,isAuthorizedRoles("admin"),createSkill)
router.get("/skills/:id",isAuthenticated,isAuthorizedRoles("admin"),getSingleSkill)
router.get("/skills",getAllSkills)
router.put("/skill/:id",isAuthenticated,isAuthorizedRoles("admin"),updateSkill)
router.delete("/skills/:id",isAuthenticated,isAuthorizedRoles("admin"),deleteSkill)


module.exports = router