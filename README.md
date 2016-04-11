# tree-directory
[![version](https://img.shields.io/npm/v/tree-directory.svg)](https://www.npmjs.org/package/tree-directory)
[![status](https://travis-ci.org/zoubin/tree-directory.svg)](https://travis-ci.org/zoubin/tree-directory)
[![dependencies](https://david-dm.org/zoubin/tree-directory.svg)](https://david-dm.org/zoubin/tree-directory)
[![devDependencies](https://david-dm.org/zoubin/tree-directory/dev-status.svg)](https://david-dm.org/zoubin/tree-directory#info=devDependencies)

Print a directory structure in the tree format

## Example
**Directory structure**

```
example/src
├── page
│   ├── hello
│   │   └── index.css
│   └── world
│       ├── index.css
│       └── index.js
└── vendor
    └── index.js
```

To print all javascript files:

```javascript
var tree = require('tree-directory')

tree(__dirname + '/src', '**/*.js').then(function (res) {
  console.log(res)
})

```

**Output**
```
├─ page
│  └─ world
│     └─ index.js
└─ vendor
   └─ index.js

```

## tree(root[, patterns])
Return a promise which resolves to a treeish string
representing the directory `root` (not including itself).

**root**

The target directory to format.

Type: `String`

**patterns**

[Globs](https://github.com/sindresorhus/globby#patterns)
to match the files to include.

Type: `String`, `Array`

Default: `**/*`

## tree.sync(root[, patterns])
Just return the treeish string.

