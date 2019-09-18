const Router = require('koa-router')
const Product = require('../models/Product')
const Cart = require('../models/Cart')

const router = new Router()

// 商品列表
router.get('/page', async ctx => {
  const { page = 1 } = ctx.query
  const total = await Product.find()
  const products = await Product
    .find()
    .skip((page - 1) * 12)
    .limit(12)
  const data = {
    list: products,
    pagination: {
      current: parseInt(page),
      pageSize: 12,
      total: total.length
    }
  }
  ctx.status = 200
  ctx.body = { data, statusCode: '0', statusMessage: 'Success' }
})

// 详情
router.get('/detail', async ctx => {
  await Product.findById(ctx.query.id)
    .then(data => {
      return ctx.body = { data, statusCode: '0', statusMessage: 'Success' }
    })
    .catch(() => {
      return ctx.body = { statusCode: '1', statusMessage: '发生了错误，删除失败' }
    })
})


// 添加到我的购物车
router.post('/addToCart', async (ctx, next) => {
  const postParam = ctx.request.body
  const isExist = await Cart.findById(postParam.pid)
  if (isExist) {
    // 执行修改动作
    await Cart.findByIdAndUpdate(postParam.pid, postParam)
  } else {
    // 执行新增动作
    await new Cart(postParam)
      .save()
      .then(() => {
        return ctx.body = { statusCode: '0', statusMessage: '操作成功' }
      })
      .catch(() => {
        return ctx.body = { statusCode: '1', statusMessage: '新增失败' }
      })
  }
})

// 购物车列表(连表查询)
router.get('/myCart', async ctx => {
  const { page = 1 } = ctx.query
  const total = await Cart.find()
  await Cart
    .find()
    .populate('pid', 'name price pictureUrl')
    .exec()
    .then(result => {
      const data = {
        list: result,
        pagination: {
          current: parseInt(page),
          pageSize: 10,
          total: total.length
        }
      }
      return ctx.body = { data, statusCode: '0', statusMessage: 'Success' }
    })
    .catch(() => {
      return ctx.body = { statusCode: '1', statusMessage: '购物车查询失败' }
    })
})

// 删除购物车的商品
router.get('/deleteCart', async ctx => {
  await Cart.findByIdAndDelete(ctx.query.id)
    .then(() => {
      return ctx.body = { statusCode: '0', statusMessage: '删除成功' }
    })
    .catch(() => {
      return ctx.body = { statusCode: '1', statusMessage: '发生了错误，删除失败' }
    })
})

module.exports = router.routes()

// 下面的代码用于商品新增
/*   const product = new Product({
  name: '华为P30',
  price: 3988,
  pictureUrl: 'https://img14.360buyimg.com/n7/jfs/t1/50018/39/8127/229510/5d5b5043E66769ff0/8907776f7bd66d57.jpg',
  description: `
  华为P30，是华为公司旗下一款手机。手机搭载海思Kirin 980处理器，屏幕为6.1英寸，分辨率2340*1080像素。 [1]  摄像头最大30倍数码变焦。
2019年3月26日晚21时，华为P30系列在法国巴黎会议中心发布。2019年4月11日，HUAWEI P30系列在上海东方体育中心正式发布。
2019年7月4日华为P30现推出了6GB内存+128GB闪存版本的型号，售价与8GB+64GB版本相同，都是3988元 [2]  。
  `
})

product.save()
  .then(value => console.log(value))
  .catch(err => console.log(err))


const iphonexr = new Product({
  name: 'iphone xr',
  price: 5099,
  pictureUrl: 'https://img10.360buyimg.com/n7/jfs/t1/3405/18/3537/69901/5b997c0aE5dc8ed9f/a2c208410ae84d1f.jpg',
  description: `
  iPhone XR是美国Apple（苹果公司）旗下的智能手机，搭载7nm工艺的A12仿生芯片，采用TrueDepth摄像头，支持Face ID功能。
2018年9月13日凌晨，iPhone XR在2018苹果秋季新品发布会上正式发布，起售价749美元。 [1]  2018年10月19日3点01分正式开售。 [2-3]
  `
})

iphonexr.save()
  .then(value => console.log(value))
  .catch(err => console.log(err))

 */