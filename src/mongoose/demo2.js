const mongoose = require('mongoose')

// 1.连接数据库
mongoose.connect('mongodb://localhost/students', { useNewUrlParser: true, useUnifiedTopology: true }, err => {
  if (err) return console.log('Connection Error:' + err)
  console.log('Connection success!')
})

// 2.设计文档结构
const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  alias: String,
})

// 3.将文档结构发布为模型
// 第一个参数：传入一个大写的字符串表示你的数据库名称，MongoDB会自动转成小写的复数形式
//            例如： User --> users
// 第二个参数：架构 Schema
// 返回值：模型构造函数

const User = mongoose.model('User', userSchema)

// 4.使用模型构造函数，对集合中的数据进行操作

// 4.1 增
const gdz = new User({
  userName: '张三',
  age: 18,
  alias: '耿德洲'
})
// gdz.save((err, result) => {
//   if (err) return console.log('保存失败')
//   console.log(result)
// })

// 4.2 查
User.find((err, res) => {
  if (err) return console.log('查询失败')
  console.log(res)
})

// 4.2.2 条件查询

// User.find({userName: '张三'},(err,data) => {
//   if(err) return console.log('查询出错')
//   console.log(data)
// })

// User.findOne({userName:'张三'},(err,data) => {
//   if(err) return console.log('查询出错')
//   console.log(data)
// })


User.deleteMany((err, data) => {
  if (err) return console.log('删除出错')
  console.log(data)
})


// User.updateOne({ userName: '张三' }, { alias: '张狗蛋' }, (err, data) => {
//   if (err) return console.log('更新失败')
//   console.log(data)
// })