/**
 * route.js职责是：
 *  进行路由分发
 *    （请求类型+url地址） --> 转到相应的处理函数
 */
const express = require('express')
const Student = require('./Student')

const router = express.Router()

router.get('/list', (req, res) => {
  Student.find((err, students) => {
    if (err) return res.status(500).send('服务器异常')
    res.render('index.html', { students })
  })
})

// 新增学生
router.post('/students/new', (req, res) => {
  new Student(req.body).save(err => {
    if (err) return res.status(500).send('服务器异常')
    res.redirect('/list')
  })
})

// 编辑初始化
router.get('/students/edit', (req, res) => {
  Student.findById(req.query.id, (err, student) => {
    if (err) return res.status(500).send('服务器异常')
    res.render('edit.html', { student })
  })
})

// 更新学生
router.post('/students/edit', (req, res) => {
  Student.findByIdAndUpdate( req.body.id , req.body, err => {
    if (err) return res.status(500).send('服务器异常')
    res.redirect('/list')
  })
})

// 删除学生
router.get('/students/delete', (req, res) => {
  Student.findByIdAndRemove(req.query.id, err => {
    if (err) return res.status(500).send('服务器异常')
    res.redirect('/list')
  })
})

// 新增的html页面
router.get('/students/new', (req, res) => {
  res.render('new.html')
})

module.exports = router
