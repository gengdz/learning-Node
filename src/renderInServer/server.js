/**
 * 服务端渲染的本质就是字符串的替换，
 * 需要使用到的是模板引擎(art-template)
 * 
 */

const fs = require('fs')
const http = require('http')
const template = require('art-template')

const server = http.createServer()
server.on('request', (req, res) => {
  fs.readFile('./content/index.html', (err, data) => {
    if (err) return res.end('404，Not Found')
    fs.readdir('D:/gengdz/learning-Node/src', (err, files) => {
      if (err) return res.end('Can not find dir')
      const htmlContent = template.render(data.toString(), {
        title: 'menu',
        files,
      })
      res.end(htmlContent)
    })
  })
})

server.listen(3000, () => {
  console.log('running')
})
