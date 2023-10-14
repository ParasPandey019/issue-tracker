const express = require('express');
const router = express.Router();
const projectController = require("../controllers/project_controllers");
const issueController = require("../controllers/project_controllers");



// Route for home page
router.get("/",projectController.homePage);

// Route to create project page and create project
router.route("/create_project");

// Route to project details page
router.route("/project_details/:id");

// Route to create issue page and create issue
router.route("/create_issue/:id");

// Exporting all the routes
module.exports = router;

