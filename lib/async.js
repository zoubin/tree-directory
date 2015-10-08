var glob = require('globby')
var treeify = require('treeify')
var treeObj = require('./treeObj')

module.exports = function (root, patterns) {
  return glob(patterns || '**/*', { cwd: root })
  .then(function (files) {
    var o = treeObj(files)
    return {
      obj: o,
      basedir: root,
      str: treeify.asTree(o),
    }
  })
}

