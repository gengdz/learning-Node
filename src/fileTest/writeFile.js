const fs = require('fs')

const appendContent = '我通过fs模块向文件中添加内容'
fs.writeFile('./content.md', appendContent, err => {
  if (err) return console.log('文件写入失败')
  console.log(`数据写入成功`)
})
