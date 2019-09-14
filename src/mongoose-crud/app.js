/**
 * app.js 是入口文件
 * 职责是：
 *  创建服务
 *  做一些服务相关配置
 *    模板引擎
 *    bodyParser解析表单body
 *    提供静态资源服务
 *  挂载路由
 *  监听端口，启动服务
 */
const express = require('express')
const bodyParser = require('body-parser')
const router = require('./promiseRouter.js')

const app = express()
app.engine('html', require('express-art-template'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/public/', express.static('./public/'))
// 挂载路由
app.use(router)

app.listen(3000, () => {
  console.log('crud-exprss版启动在3000端口')
})