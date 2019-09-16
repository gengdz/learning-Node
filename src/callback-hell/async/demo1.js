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
  const aaContent = await pReadFile('../a.txt')
  const bbContent = await pReadFile('../b.txt')
  const ccContent = await pReadFile('../c.txt')
  console.log(aaContent)
  console.log(bbContent)
  console.log(ccContent)
  const content = `
  a文件的内容${aaContent};
  b文件的内容：${bbContent}
  c文件的内容：${ccContent}
  `
  return content
}

asyncReadFile()

asyncReadFile().then(console.log)
