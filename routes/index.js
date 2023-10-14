const express = require('express');
const router = express.Router();
const controller = require("../controllers/controllers");



// Route for home page
router.route("/");

// Route to create project page and create project
router.route("/create_project");

// Route to project details page
router.route("/project_details/:id");

// Route to create issue page and create issue
router.route("/create_issue/:id");

// Exporting all the routes
module.exports = router;

