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
  let content = 'aa'
  try {
    // const [aaContent, bbContent, ccContent] = await Promise.all([
    //   pReadFile('../a.txt'), pReadFile('../b.txt'), pReadFile('../c.txt')
    // ])

    const aaContent = await pReadFile('../a.txt')
    const bbContent = await pReadFile('../b.txt')
    const ccContent = await pReadFile('../cc.txt')

    content = `
      a文件的内容：${aaContent}
      b文件的内容：${bbContent}
      c文件的内容：${ccContent}
      `
  } catch (e) {
    console.log('发生了错误')
  }
  return content
}

asyncReadFile().then(console.log)
