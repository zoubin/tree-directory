var tree = require('..')
var test = require('tap').test
var fs = require('fs')

test('obj', function (t) {
  var files = [
    'vendor',
    'vendor/index.js',
    'page',
    'page/hello',
    'page/hello/index.css',
    'page/world',
    'page/world/index.css',
    'page/world/index.js',
  ]

  t.same(tree.obj(files), {
    vendor: { 'index.js': null },
    page: {
      hello: { 'index.css': null },
      world: { 'index.js': null, 'index.css': null },
    },
  })

  t.end()
})

test('stringify', function (t) {
  var root = __dirname + '/fixtures'
  var expected = fs.readFileSync(root + '/expected', 'utf8')
  tree(root + '/src').then(function (s) {
    t.equal(s, expected, 'async')
    t.end()
  })
})

test('stringify, sync, patterns', function (t) {
  var root = __dirname + '/fixtures'
  var expected = fs.readFileSync(root + '/patterns.expected', 'utf8')
  t.equal(
    tree.sync(root + '/src', '**/*.js'),
    expected,
    'js'
  )
  t.end()
})

