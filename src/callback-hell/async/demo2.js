const fs = require('fs')

const pReadFile = url => {
  return new Promise((resolve, reject) => {
    fs.readFile(url, 'utf8', (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

asyncReadFile = async () => {
  const aaContent = await pReadFile('../aa.txt').catch(() => console.log('a文件读取失败'))
  const bbContent = await pReadFile('../bb.txt').catch(() => console.log('b文件读取失败'))
  const ccContent = await pReadFile('../c.txt').catch(() => console.log('c文件读取失败'))
  content = `
  a文件的内容: ${aaContent};
  b文件的内容：${bbContent}
  c文件的内容：${ccContent}
  `
  return content
}

asyncReadFile().then(console.log)
