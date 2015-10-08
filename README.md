# tree-directory
[![status](https://travis-ci.org/zoubin/tree-directory.svg?branch=master)](https://travis-ci.org/zoubin/tree-directory) [![version](https://img.shields.io/npm/v/tree-directory.svg)](https://www.npmjs.org/package/tree-directory) [![dependencies](https://david-dm.org/zoubin/tree-directory.svg)](https://david-dm.org/zoubin/tree-directory) [![devDependencies](https://david-dm.org/zoubin/tree-directory/dev-status.svg)](https://david-dm.org/zoubin/tree-directory#info=devDependencies)

Print a directory structure in the tree format

## Usage

```javascript
var tree = require('tree-directory')

var res = tree.sync(__dirname + '/fixtures')

console.log(res.obj)
console.log(res.basedir)
console.log(res.str)

```

output:
```
⌘ node example/tree.js
{ a: { b: { c: null }, d: null }, e: { f: null }, g: null }
/Users/zoubin/usr/src/zoubin/tree-directory/example/fixtures
├─ a
│  ├─ b
│  │  └─ c
│  └─ d
├─ e
│  └─ f
└─ g

```

### rv = tree(basedir, patterns)

Return a promise that resolves to the tree info object of `basedir`.

#### basedir

Type: `String`

The target directory

#### patterns

Type: `String`, `Array`

Default: `**/*`

See [globby](https://github.com/sindresorhus/globby#patterns)

#### rv

* `obj`: object representation
* `str`: string representation
* `basedir`: the basedir itself

