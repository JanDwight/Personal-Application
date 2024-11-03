const express = require('express')
const router = express.Router()
const { createProject, readProject, updateProject, archiveProject, deleteProject } = require('../controllers/projectController')

// protect the routes. Authenticated users only.
const { protect } = require('../../middleware/authMiddleWare')

router.route('/').get(protect, readProject).post(protect, createProject)
router.route('/:id').put(protect, updateProject).delete(protect, deleteProject)

module.exports = router