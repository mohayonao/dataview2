# dataview2
[![Build Status](http://img.shields.io/travis/mohayonao/dataview2.svg?style=flat-square)](https://travis-ci.org/mohayonao/dataview2)
[![NPM Version](http://img.shields.io/npm/v/dataview2.svg?style=flat-square)](https://www.npmjs.org/package/dataview2)
[![License](http://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](http://mohayonao.mit-license.org/)
> Efficient DataView for isomorphic libraries

## Installation

npm:

```
npm install dataview2
```

## API
- `DataView2(buffer: Buffer|ArrayBuffer): BufferDataView|DataView`
  - node.js: returns an instance of [`BufferDataView`](https://github.com/TooTallNate/node-buffer-dataview)
  - browser: returns an instance of `DataView`
- `Buffer2(n: size): Buffer|ArrayBuufer`
  - node.js: return an instance of `Buffer`
  - browser: return an instance of `ArrayBuffer`

## Examples

use Buffer in the Node.js

```js
var buffer = new Buffer2(4); // → Buffer
var view = new DataView2(buffer); // → BufferDataView

// set a "float" in the data view
view.setFloat32(0, 1337.1234, true);

// ensure that the original Buffer was modified
console.log(buffer.readFloatLE(0));
// → 1337.1234130859375

console.log(view.buffer instanceof Buffer);
// → true
```

use ArrayBuffer in the browser

```js
var buffer new Buffer2(4); // → ArrayBuffer
var view = new DataView2(buffer); // → DataView

// set a "float" in the data view
view.setFloat32(0, 1337.1234, true);

console.log(view.buffer instanceof ArrayBuffer);
// → true

// ensure that the original ArrayBuffer was modified
console.log(new Float32Array(buffer)[0]);
// → 1337.1234130859375
```

## License
MIT
