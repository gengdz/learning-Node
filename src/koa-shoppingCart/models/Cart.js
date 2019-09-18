const mongoose = require('mongoose')

const CartSchema = new mongoose.Schema({
  pid: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  pcount: Number,
})

module.exports = mongoose.model('Cart', CartSchema)