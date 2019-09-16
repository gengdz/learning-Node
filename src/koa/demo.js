const Koa = require('koa')
const Router = require('koa-router')
const bodyparser = require('koa-bodyparser')


const app = new Koa()
const router = new Router()

app.use(router.routes()).use(router.allowedMethods())

app.use(bodyparser())

// 没有url,只有一个异步函数，表示匹配每一个地址
app.use(async (ctx, next) => {
  console.log(new Date())
  await next()
})

app.use(async (ctx,next) => {
  next()
  if(ctx.status ===404){
    ctx.body = '这是一个404页面'
  }
})

// 应用级中间件 动态路由 :name 表示动态路由,name的值不确定 类比 @PathValiable
router.get('/test/:name/:age', async ctx => {
  // 使用ctx.params的方式获取 -->值为：{ name: 'gengdz', age: '25' }
  console.log(ctx.params)
  ctx.status = 200
  ctx.body = { statusMessage: 'shopping works' }
})

// 路由级中间件
router.get('/', async (ctx, next) => {
  console.log(1)
  next()
})
router.get('/', async (ctx, next) => {
  ctx.body = 'hello'
})

app.listen(3000, () => console.log('demo已启动。。。'))