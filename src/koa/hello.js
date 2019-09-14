const koa = require('koa')
const Router = require('koa-router')

// 实例化koa 
const app = new koa()
const router = new Router()

router.get('/', async ctx => {
    ctx.body = {
        msg: 'hello koa'
    }
})

router.get('/login',async ctx => {
    
})

// 路由配置
app.use(router.routes()).use(router.allowedMethods())


const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`启动在${port}`)
})