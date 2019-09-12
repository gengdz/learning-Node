const fs = require('fs')

fs.readdir('../httpTest', (err, files) => {
  if (err) {
    return console.log('发生了错误')
  }
  console.log(files)
})