const http = require('http')

const server = http.createServer()

// 接收请求 --> 处理请求 --> 发送响应
server.on('request', (resquest,response) => {
  console.log(`客户端发送的请求地址是：${resquest.url}`)
  response.write('hello   ')
  response.write('node.js')
  response.end()
})

// 绑定端口号，启动服务器
server.listen(3000, () => {
  console.log('服务端已经启动')
})
