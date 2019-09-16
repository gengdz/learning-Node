/**
 * server层的职责是：操作文件中数据，只处理数据，不关心业务
 * 也就是说：只有一些函数，给入参，返回结果
 */
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/students', {
  useNewUrlParser: true, useUnifiedTopology: true
}, err => {
  if (err) return console.log('Connection Error:' + err)
  console.log('Connection success!')
})

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  gender: {
    type: Number,
    enum: [0, 1],
    default: 0,
    required: true
  },
  age: Number,
  hobbies: String
})

module.exports = mongoose.model('Student', userSchema)
