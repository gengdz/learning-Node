const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const comments = [
  {
    name: '耿德洲',
    message: '耿德洲发表了帖子',
    dateTime: '2019/9/12'
  },
]

// 配置express-art-template
app.engine('html', require('express-art-template'));

// 配置body-parser 中间件
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.render('index.html', {
    comments
  })
})

app.get('/post', (req, res) => {
  res.render('post.html')
})

app.post('/post', (req, res) => {
  const comment = req.body
  comment.dateTime = Date.now()
  comments.unshift(comment)
  res.redirect('/')
})

// 1.开放静态资源,推荐这种方式
app.use('/public/', express.static('./public/'))

app.listen(3000, () => {
  console.log('服务启动在了3000端口')
})