const asyncHandler = require('express-async-handler')
const Project = require('../models/projectModel')

  // validation for project_name is handled in project models
  // if project_name is null "Project validation failed: project_name: Please add the project name."

const createProject = asyncHandler(async (req, res) => {
  const {project_name} = req.body

  // check if the project exists
  const projectExists = await Project.findOne({project_name})

  if (projectExists) {
    res.status(400)

    throw new Error('Project already exists.')
  }

  // Create the project
  const project = await Project.create({
    user_id: req.user._id,
    project_name
  })

  if (!project) {
    res.status(400)

    throw new Error('Project creation failed.')
  }

  res.status(201).json({
    message: 'Project create successfuly'
  })
})

const readProject = asyncHandler(async (req, res) => {
  const user = req.user._id

  const projects = await Project.find({user_id: user})

  if (!projects) {
    res.status(400)

    throw new Error('No project found.')
  }

  res.status(200).json({
    data: projects
  })
})

const updateProject = asyncHandler(async (req, res) => {
  const { _id, project_name } = req.body

  // Find and update the project by _id
  const updatedProject = await Project.findOneAndUpdate(
    _id,
    { project_name },
    { new: true }
  );

  if (!updatedProject) {
    res.status(400)

    throw new Error('No project found.')
  }

  res.status(200).json({ message: 'Project updated successfully.' })
})

const archiveProject = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: 'Project archived successfuly.'
  })
})

const deleteProject = asyncHandler(async (req, res) => {
  const {id} = req.params 

  const deletedProject = await Project.findOneAndDelete({_id: id})

  if (!deletedProject) {
    res.status(404)

    throw new Error('No project found.')
  }

  res.status(200).json({
    message: 'Project deleted successfuly.',
  })
})

module.exports = {
  createProject,
  readProject,
  updateProject,
  archiveProject,
  deleteProject,
}