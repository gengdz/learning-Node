const test = 'aaa'
console.log('a->start')
require('./b')
console.log('a->end')

const { sum } = require('./b')
console.log(sum(100, 1))