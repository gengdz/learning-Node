const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  pictureUrl: {
    type: String,
    required: true,
    default: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3298005417,2605075504&fm=26&gp=0.jpg'
  },
  description: String
})

module.exports = mongoose.model('Product', ProductSchema)