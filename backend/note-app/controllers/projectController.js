const asyncHandler = require('express-async-handler')
const Project = require('../models/projectModel')

const createProject = asyncHandler(async (req, res) => {
  res.status(201).json({
    message: 'Project created successfuly.'
  })
})

const readProject = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: 'Data read response'
  })
})

const updateProject = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: 'Project updated successfuly.'
  })
})

const archiveProject = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: 'Project archived successfuly.'
  })
})

const deleteProject = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: 'Project deleted successfuly.'
  })
})

module.exports = {
  createProject,
  readProject,
  updateProject,
  archiveProject,
  deleteProject,
}