var glob = require('globby')
var treeify = require('treeify')
var path = require('path')
var getp = require('getp')
var set = require('getp/set')

function stringify(root, patterns) {
  return glob(patterns || '**/*', { cwd: root })
    .then(function (files) {
      return treeify.asTree(obj(files))
    })
}

function sync(root, patterns) {
  patterns = patterns || '**/*'
  var files = glob.sync(patterns, { cwd: root })
  return treeify.asTree(obj(files))
}

function obj(files) {
  var o = {}
  files.forEach(function (file) {
    var parts = file.split(path.sep).filter(Boolean)
    if (getp(o, parts, false) == null) {
      set(o, parts, null)
    }
  })
  return o
}

exports = module.exports = stringify
exports.sync = sync
exports.obj = obj

