var path = require('path')
var getp = require('getp')
var set = require('getp/set')

module.exports = function (files) {
  var o = {}
  files.forEach(function (file) {
    var parts = file.split(path.sep).filter(Boolean)
    if (getp(o, parts, false) == null) {
      set(o, parts, null)
    }
  })
  return o
}

