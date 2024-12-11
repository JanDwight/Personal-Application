const express = require('express')
const router = express.Router()
const { createProduct, readProduct, updateProduct, archiveProduct, deleteProduct } = require('../controllers/productControllers')

// protect the routes. Authenticated users only.
const { protect } = require('../../middleware/authMiddleWare')

router.route('/').get(protect, readProduct).post(protect, createProduct)
router.route('/:id').put(protect, updateProduct).delete(protect, deleteProduct)

module.exports = router