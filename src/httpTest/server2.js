const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {
    const reqUrl = req.url
    const reqAddress = req.socket.remoteAddress
    const reqPort = req.socket.remotePort
    console.log(`地址是：${reqAddress} ---- ${reqPort}`)
    res.setHeader('Content-Type', 'text/plain;charset=utf-8')
    if (reqUrl === '/login') {
        const result = [
            {
                name: 'gengdz',
                age: 18
            }, {
                name: 'sunpang',
                age: 18
            }
        ]
        res.end(JSON.stringify(result))
    } else if (reqUrl === '/page') {
        res.end('返回的是中文')
    } else {
        res.end('404')
    }
})
server.listen(3000, () => {
    console.log('服务器启动了')
})