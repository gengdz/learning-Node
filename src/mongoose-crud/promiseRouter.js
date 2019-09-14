/**
 * route.js职责是：
 *  进行路由分发
 *    （请求类型+url地址） --> 转到相应的处理函数
 */
const express = require('express')
const Student = require('./studentServer')

const router = express.Router()

// 学生列表
router.get('/list', (req, res) => {
  Student.find()
    .then(students => res.render('index.html', { students }))
    .catch(() => res.status(500).send('服务器异常'))
})

// 新增学生
router.post('/students/new', (req, res) => {
  new Student(req.body).save()
    .then(() => res.redirect('/list'))
    .catch(() => res.status(500).send('服务器异常'))
})

// 编辑初始化
router.get('/students/edit', (req, res) => {
  Student.findById(req.query.id)
    .then(student => res.render('edit.html', { student }))
    .catch(() => res.status(500).send('服务器异常'))
})

// 更新学生
router.post('/students/edit', (req, res) => {
  Student.findByIdAndUpdate(req.body.id, req.body)
    .then(() => res.redirect('/list'))
    .catch(() => res.status(500).send('服务器异常'))
})

// 删除学生
router.get('/students/delete', (req, res) => {
  Student.findByIdAndRemove(req.query.id)
    .then(() => res.redirect('/list'))
    .catch(() => res.status(500).send('服务器异常'))
})

// 新增的html页面
router.get('/students/new', (req, res) => {
  res.render('new.html')
})

module.exports = router
