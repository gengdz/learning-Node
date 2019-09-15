const express = require('express')
const mongoose = require('mongoose')
const Product = require('../models/Product')
const Cart = require('../models/Cart')

const router = express.Router()

mongoose.connect('mongodb://localhost/shoppingCart', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('shoppingCart连接成功'))
  .catch((err) => console.log('Connection Error:' + err))

router.get('/page', (req, res) => {
  const { query: { page = 1, size = 10 } } = req
  Product.find()
    .then(data => res.end(JSON.stringify(data)))
    .catch(() => console.log('服务器异常'))
})





module.exports = router

  // const product = new Product({
//   name: '华为P30',
//   price: 3988,
//   pictureUrl: 'https://img14.360buyimg.com/n7/jfs/t1/50018/39/8127/229510/5d5b5043E66769ff0/8907776f7bd66d57.jpg',
//   description: '麒麟980AI智能芯片'
// })

// product.save()
//   .then(value => console.log(value))
//   .catch(err => console.log(err))