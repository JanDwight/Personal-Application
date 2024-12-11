const mongoose = require('mongoose')

const productModel = mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    require: true
  },

  product_name: {
    type: String,
    required: [true, "Please add the product name."],
  },

  price: {
    type: String,
    default: '0.00'
  },

  bought_from: {
    type: String,
  }
}, 
{
  timestamps: true
})

productModel.index({product_name: 1, brought_from: 1}, {unique: true}) // not working yet, add message

module.exports = mongoose.model('Product', productModel)