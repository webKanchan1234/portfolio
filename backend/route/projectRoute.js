const express = require("express")
const { isAuthenticated, isAuthorizedRoles } = require("../middlware/auth")
const { createProject, getSingleProject, getAllProjects, updateProject, deleteProject } = require("../controller/projectController")
const router = express.Router()


router.post("/add-project",isAuthenticated,isAuthorizedRoles("admin"),createProject)
router.get("/projects/:id",isAuthenticated,isAuthorizedRoles("admin"),getSingleProject)
router.get("/projects",getAllProjects)
router.put("/projects/:id",isAuthenticated,isAuthorizedRoles("admin"),updateProject)
router.delete("/projects/:id",isAuthenticated,isAuthorizedRoles("admin"),deleteProject)


module.exports = router