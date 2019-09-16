const mongoose = require('mongoose')

module.exports = app => {
  mongoose.connect('mongodb://localhost/shoppingCart', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(() => console.log('shoppingCart连接成功'))
    .catch(err => console.log('Connection Error:' + err))
}

