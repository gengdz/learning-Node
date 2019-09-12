const http = require('http')
const fs = require('fs')
const template = require('art-template')
const url = require('url')


const comments = [
  {
    name: 'gdz',
    message: '耿德洲发表了帖子',
    dateTime: '2019/9/12'
  }, {
    name: '张三',
    message: '张三发表了帖子',
    dateTime: '2019/9/12'
  }, {
    name: '李四',
    message: '李四发表了帖子',
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
    comments.push(comment)

    /**
     * 如何通过服务器让客户端重定向？
     * 
     */

    fs.readFile('./views/index.html', (err, data) => {
      if (err) return res.end('notFoundPage')
      const htmlContent = template.render(data.toString, { comments })
      res.end(htmlContent)
    })


  } else {
    fs.readFile('./views/404.html', (err, data) => {
      return res.end(data)
    })
  }

})
  .listen(3000, () => {
    console.log('runnning')
  })