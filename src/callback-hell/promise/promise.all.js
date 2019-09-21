
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

// 1. 三个都成功，这时候返回 每一个 promise的返回值组成的数组。
// const pa = pReadFile('../a.txt').then(data => data).catch(() => console.log('a出错了'))
// const pb = pReadFile('../b.txt').then(data => data).catch(() => console.log('b出错了'))
// const pc = pReadFile('../c.txt').then(data => data).catch(() => console.log('c出错了'))

// 2. 有任何一个失败，但是失败的那个有自己的catch方法, 这个时候执行完自己的catch方法后也变成了resolved状态
// const pa = pReadFile('../a.txt').then(data => data).catch(() => console.log('a出错了'))
// const pb = pReadFile('../bb.txt').then(data => data).catch(() => console.log('b出错了'))
// const pc = pReadFile('../cc.txt').then(data => data).catch(err=>err)

// 3.有任何一个失败，同时失败的那个没自己的catch方法，这时候就会执行promise.all()的catch方法,
// 这时候不会返回数组了。直接返回err对象
const pa = pReadFile('../aa.txt').then(data => data)
const pb = pReadFile('../bb.txt').then(data => data)
const pc = pReadFile('../c.txt').then(data => data).catch(err=>err)

const p = Promise.all([pa, pb, pc])

p.then(data => console.log(data))
  .catch(err => console.log(`失败了: ${err}`))

