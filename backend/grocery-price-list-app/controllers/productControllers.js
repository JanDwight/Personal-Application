const asyncHandler = require('express-async-handler')
const Product = require('../models/productModels')

// validations are handled in productModel.js

const createProduct = asyncHandler(async (req, res) => {
  const {product_name, price, bought_from} = req.body

  // Create the product
  const product = await Product.create({
    user_id: req.user._id,
    product_name,
    price,
    bought_from
  })

  if (!product) {
    res.status(400)

    throw new Error('Product creation failed.')
  }

  res.status(201).json({
    message: 'Product created successfuly.'
  })

})

const readProduct = asyncHandler(async (req, res) => {
  const user = req.user._id

  const products = await Product.find({user_id: user})

  if (!products) {
    res.status(400)

    throw new Error('No products found.')
  }
})

const updateProduct = asyncHandler(async (req, res) => {
  const {_id, product_name, price, bought_from} = req.body

  // Find and update the product by _id
  const updateProduct = await Product.findOneAndUpdate(
    _id,
    { 
      product_name,
      price,
      bought_from
    },
    { new: true }
  )

  if (!updateProduct) {
    res.status(400)

    throw new Error('No product found.')
  }

  res.status(200).json({  message: 'Product updated successfully'  })
})

  const archiveProduct = asyncHandler(async (req, res) => {
    res.status(200).json({
      message: 'Product archive function COMING SOON.'
    })
  })

  const deleteProduct = asyncHandler(async (req, res) => {
    const {id} = req.params

    const deletedProduct = await Product.findOneAndDelete({_id: id})

    if (!deletedProduct) {
      res.status(400)

      throw new Error('No product found.')
    }

    res.status(200).json({
      message: 'Product deleted successfuly.'
    })
  })

  module.exports = {
    createProduct,
    readProduct,
    updateProduct,
    archiveProduct,
    deleteProduct,
  }