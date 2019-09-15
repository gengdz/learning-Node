const express = require('express')
const bodyParser = require('body-parser')
const router = require('./routes/cart')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(router)

app.listen(3000,() => {
  console.log('购物车node服务启动在了3000端口')
})
