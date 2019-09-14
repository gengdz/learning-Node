/**
 * server层的职责是：操作文件中数据，只处理数据，不关心业务
 * 也就是说：只有一些函数，给入参，返回结果
 */

const fs = require('fs')
const dbPath = './db.json'

// 获取学生列表
exports.find = (callback) => {
  fs.readFile(dbPath, 'utf8', (err, data) => {
    if (err) return callback(err)
    callback(null, JSON.parse(data).students)
  })
} 

// 根据id查学生
exports.findById = (callback, id) => {
  fs.readFile(dbPath, 'utf8', (err, data) => {
    if (err) return callback(err)

    const students = JSON.parse(data).students
    const student = students.find(item => item.id === parseInt(id))
    callback(null, student)
  })
}

// 添加学生
exports.add = (callback, student) => {
  fs.readFile(dbPath, 'utf8', (err, data) => {
    if (err) return callback(err)

    const students = JSON.parse(data).students
    student.id = students[students.length - 1].id + 1
    students.push(student)

    const fileData = JSON.stringify({ students })
    fs.writeFile(dbPath, fileData, err => {
      if (err) return callback(err)
      callback(null)
    })
  })
}

// 更新学生信息
exports.editById = (callback, student) => {
  fs.readFile(dbPath, 'utf8', (err, data) => {
    if (err) return callback(err)

    const students = JSON.parse(data).students
    student.id = parseInt(student.id)
    const oldStudent = students.find(item => item.id === student.id)
    for (let key in student) {
      oldStudent[key] = student[key]
    }
    const fileData = JSON.stringify({ students })
    fs.writeFile(dbPath, fileData, err => {
      if (err) return callback(err)
      callback(null)
    })
  })

}

// 删除学生
exports.delete = (callback, id) => {
  fs.readFile(dbPath, 'utf8', (err, data) => {
    if (err) return callback(err)

    const students = JSON.parse(data).students
    const deleteIndex = students.findIndex(item => item.id === parseInt(id))
    students.splice(deleteIndex, 1)

    const fileData = JSON.stringify({ students })
    fs.writeFile(dbPath, fileData, err => {
      if (err) return callback(err)
      callback(null)
    })
  })

}