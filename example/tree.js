var tree = require('..')

console.log('-'.repeat(40))
console.log(
  tree.sync(__dirname + '/src')
)

tree(__dirname + '/src', '**/*.js').then(function (res) {
  console.log('-'.repeat(40))
  console.log(res)
})

