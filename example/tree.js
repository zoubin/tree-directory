var tree = require('..')

var res = tree.sync(__dirname + '/fixtures')

console.log(res.obj)
console.log(res.basedir)
console.log(res.str)

