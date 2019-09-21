
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


const pa = pReadFile('../a.txt').then(data => data).catch(err=>err)
const pb = pReadFile('../b.txt').then(data => data).catch(err=>err)
const pc = pReadFile('../c.txt').then(data => data)

const p = Promise.race([pa, pb, pc])

p.then(data => console.log(data))
  .catch(err => console.log(`失败了: ${err}`))

