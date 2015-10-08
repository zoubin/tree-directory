var glob = require('globby')
var treeify = require('treeify')
var treeObj = require('./treeObj')

module.exports = function (root, patterns) {
  patterns = patterns || '**/*'
  var files = glob.sync(patterns, { cwd: root })
  var o = treeObj(files)
  return {
    obj: o,
    basedir: root,
    str: treeify.asTree(o),
  }
}


