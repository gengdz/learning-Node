const mongoose = require('mongoose')

const CartSchema = new mongoose.Schema({
  productId: String,
  quantity: Number,
  totalPrice: Number
})

module.exports = mongoose.model('Cart', CartSchema)