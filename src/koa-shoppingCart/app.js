const Koa = require('koa')
const Router = require('koa-router')
const bodyparser = require('koa-bodyparser')

const db = require('./config/db')
const shopping = require('./routes/shopping')

// 连接数据库
db()

// 实例化
const app = new Koa()
const router = new Router()

// 挂载路由
// router.use('/shopping', shopping)
router.use(shopping)

// 使用bodyparser解析post的body,增强app的能力
app.use(bodyparser())

// 配置路由
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
  console.log('购物车node服务启动在了3000端口')
})
