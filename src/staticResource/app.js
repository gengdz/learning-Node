const http = require('http')
const fs = require('fs')
const template = require('art-template')
const url = require('url')


const comments = [
  {
    name: '耿德洲',
    message: '耿德洲发表了帖子',
    dateTime: '2019/9/12'
  },
]

http.createServer((req, res) => {

  const pathObj = url.parse(req.url, true)
  const pathname = pathObj.pathname
  if (pathname === '/') {
    fs.readFile('./views/index.html', (err, data) => {
      if (err) return res.end('notFoundPage')
      const htmlContent = template.render(data.toString(), {
        comments
      })
      res.end(htmlContent)
    })
  } else if (pathname.indexOf('/public/') === 0) {
    fs.readFile('.' + pathname, (err, data) => {
      if (err) return res.end('notFoundPage')
      res.end(data)
    })
  } else if (pathname === '/post') {
    fs.readFile('./views/post.html', (err, data) => {
      if (err) return res.end('notFoundPage')
      res.end(data)
    })
  } else if (pathname === '/pinglun') {
    const comment = pathObj.query
    comment.dateTime = new Date()
    comments.unshift(comment)

    /**
     * 如何通过服务器让客户端重定向？
     * 状态码设置为302，临时重定向 res.statusCode = 302
     * 在相应头中通过Location告诉客户端往哪里重定向 res.setHeader('Location', '/')
     */
    res.statusCode = 302
    res.setHeader('Location', '/')
    res.end()
  } else {
    fs.readFile('./views/404.html', (err, data) => {
      return res.end(data)
    })
  }

})
  .listen(3000, () => {
    console.log('runnning')
  })