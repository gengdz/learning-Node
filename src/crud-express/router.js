/**
 * route.js职责是：
 *  进行路由分发
 *    （请求类型+url地址） --> 转到相应的处理函数
 */
const express = require('express')
const studentServer = require('./studentServer')

const router = express.Router()

router.get('/list', (req, res) => {
  studentServer.find((err, students) => {
    if (err) return res.status(500).send('服务器异常')
    res.render('index.html', { students })
  })
})

// 新增学生
router.post('/students/new', (req, res) => {
  studentServer.add((err) => {
    if (err) return res.status(500).send('服务器异常')
    res.redirect('/list')
  }, req.body)
})

// 编辑初始化
router.get('/students/edit', (req, res) => {
  studentServer.findById((err, student) => {
    if (err) return res.status(500).send('服务器异常')
    res.render('edit.html', { student })
  }, parseInt(req.query.id))

})

// 更新学生
router.post('/students/edit', (req, res) => {
  studentServer.editById(err => {
    if (err) return res.status(500).send('服务器异常')
    res.redirect('/list')
  }, req.body)
})

// 删除学生
router.get('/students/delete', (req, res) => {
  studentServer.delete(err => {
    if (err) return res.status(500).send('服务器异常')
    res.redirect('/list')
  }, req.query.id)
})

// 新增的html页面
router.get('/students/new', (req, res) => {
  res.render('new.html')
})

module.exports = router
