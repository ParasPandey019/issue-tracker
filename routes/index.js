const express = require('express');
const router = express.Router();
const projectController = require("../controllers/project_controllers");
const issueController = require("../controllers/issue_controllers");



// Route for home page
router.get("/",projectController.homePage);

// Route to create project create project
router.post("/create_project/create", projectController.create);

// Route to create project page 
router.get("/create_project/", projectController.page);

// Route to project details page
router.get("/project_details/:id", projectController.detail);

// Route to create issue page
router.get("/create_issue/:id",issueController.page);

// // Route to create issue
// router.get("/create_issue/:id/create/:id",issueController.create);

// Exporting all the routes
module.exports = router;

