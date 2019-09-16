const Router = require('koa-router')
const Product = require('../models/Product')
const Cart = require('../models/Cart')

const router = new Router()

router.get('/page', async ctx => {
  const products = await Product.find()
  ctx.body = products
})

module.exports = router.routes()

//   const product = new Product({
//   name: '华为P30',
//   price: 3988,
//   pictureUrl: 'https://img14.360buyimg.com/n7/jfs/t1/50018/39/8127/229510/5d5b5043E66769ff0/8907776f7bd66d57.jpg',
//   description: '麒麟980AI智能芯片'
// })

// product.save()
//   .then(value => console.log(value))
//   .catch(err => console.log(err))


// const iphonexr = new Product({
//   name: 'iphone xr',
//   price: 5099,
//   pictureUrl: 'https://img10.360buyimg.com/n7/jfs/t1/3405/18/3537/69901/5b997c0aE5dc8ed9f/a2c208410ae84d1f.jpg',
//   description: '128G 黑色 双卡'
// })

// iphonexr.save()
//   .then(value => console.log(value))
//   .catch(err => console.log(err))

