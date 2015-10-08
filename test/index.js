var tree = require('..')
var test = require('tap').test

var root = __dirname + '/fixtures'

test('sync', function(t) {
  t.same(
    tree.sync(root).obj,
    {
      a: {
        b: { c: null },
        d: null,
      },
      e: { f: null },
      g: null,
    }
  )
  t.end()
})

test('async', function(t) {
  t.plan(1)
  tree(root).then(function (o) {
    t.same(
      o.obj,
      {
        a: {
          b: { c: null },
          d: null,
        },
        e: { f: null },
        g: null,
      }
    )
  })
})

