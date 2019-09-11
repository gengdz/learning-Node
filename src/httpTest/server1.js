const http = require('http')

const server = http.createServer()

// 接收请求 --> 处理请求 --> 发送响应
server.on('request', (request, response) => {
  const requestUrl = request.url
  if (requestUrl === '/login') {
    response.write('login')
  } else {
    response.write('hello   ')
    response.write('node.js')
  }
  response.end()
})

// 绑定端口号，启动服务器
server.listen(3000, () => {
  console.log('服务端已经启动')
})
