const express = require('express');
const router = express.Router();

const { AboutData, skillData, educationData, projectData, certificates } = require("../Controllers/AboutController.js")


router.get("/about", AboutData);
router.get("/skills", skillData);
router.get("/education", educationData);
router.get("/projects", projectData);
router.get("/certificates", certificates);

module.exports = router;