const express = require('express');
const router = express.Router();
const validateTokenHandler = require('../middleware/validateTokenHandler');
const ProjectController = require('../controllers/projectController');

// Define routes for projects
router.get('/user/:userId', validateTokenHandler, ProjectController.getAllProjects);
router.get('/:projectId', validateTokenHandler, ProjectController.getProjectById);
router.post('/user/:userId', validateTokenHandler, ProjectController.createProject);
router.put('/:projectId', validateTokenHandler, ProjectController.updateProject);
router.delete('/:projectId', validateTokenHandler, ProjectController.deleteProject);

module.exports = router;
