// Promise 是一个构造函数

// 创建Promise容器
//  1. 给别人一个承诺， 
//  2. Promise容器，一旦创建就自动执行
//  3. Promise本身不是异步，但是内部往往都封装了一个异步任务
//  4. 当异步成功了 resolve(data)，当异步失败了 reject(err)
//  5. 真正有用的是我们 resolve 一个Promise对象，然后采用.then的方式，实现链式调用
//  6. 当return一个Promise对象的时候，后续then方法的第一个函数将作为p2的resolve方法，第二个函数作为p2的 reject方法



const fs = require('fs')
const p1 = new Promise((resolve, reject) => {
  fs.readFile('../a.txt', 'utf8', (err, data) => {
    if (err) {
      reject(err)
    } else {
      resolve(data)
    }
  })
})

const p2 = new Promise((resolve, reject) => {
  fs.readFile('../b.txt', 'utf8', (err, data) => {
    if (err) {
      reject(err)
    } else {
      resolve(data)
    }
  })
})

const p3 = new Promise((resolve, reject) => {
  fs.readFile('../c.txt', 'utf8', (err, data) => {
    if (err) {
      reject(err)
    } else {
      resolve(data)
    }
  })
})

p1.then((data) => {
  console.log(data)
  return p2
})
  .then((data) => {
    console.log(data)
    return p3
  })
  .then((data) => {
    console.log(data)
  })
  .catch(err => console.log(err))