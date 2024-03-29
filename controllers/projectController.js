const asyncHandler = require("express-async-handler");
const Project = require("../models/projectModel");
const { response } = require("express");

//@desc Get all projects of a user
//@route GET /api/projects/user/:userId
//@access public
const getAllProjects = asyncHandler(async (req, res) => {
    const projects = await Project.find({ user: req.params.userId });
    response.status(200).json(projects);
});

//@desc Get a project by ID
//@route GET /api/projects/:projectId
//@access public
const getProjectById = asyncHandler(async (req, res) => {
    const project = await Project.findById(req.params.projectId);
    if (!project){
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(project);
});

//@desc Create a new project
//@route POST /api/projects/user/:userId
//@access public
const createProject = asyncHandler(async (req, res) => {
    const project = await Project.create({ ...req.body, user: req.user.id });
    res.status(201).json(project);
});

//@desc Update a project
//@route PUT /api/projects/:projectId
//@access public
const updateProject = asyncHandler(async (req, res) => {
    const project = await Project.findByIdAndUpdate(req.params.projectId, req.body, { new: true });
    res.json(project);
});

//@desc Delete a project
//@route DELETE /api/projects/:projectId
//@access public
const deleteProject = asyncHandler(async (req, res) => {
    await Project.findByIdAndDelete(req.params.projectId);
    res.json({ message: 'Project deleted successfully' });
});

module.exports = { getAllProjects, getProjectById, createProject, updateProject, deleteProject };
