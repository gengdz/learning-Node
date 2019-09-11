const fs = require('fs')
fs.readFile('../hello.js', ((err, data) => {
  if (err) return console.log('文件读取失败')
  console.log(data.toString())
}))
