var assert = require("assert");
var dataview2 = require("../");

describe("DataView2", function() {
  var DataView2 = dataview2.DataView2;
  var data = [
    0x3f, 0x9d, 0xf3, 0xb6, // float32 1.234
    0x40, 0xb5, 0xb2, 0x2d, // float32 5.678
  ];

  describe("with Buffer", function() {
    it("works", function() {
      var buffer = new Buffer(data);
      var dataView = new DataView2(buffer);

      assert(dataView.getFloat32(0) === Math.fround(1.234));
      assert(dataView.getFloat32(4) === Math.fround(5.678));
      assert(dataView.buffer === buffer);
      assert(dataView.byteLength === 8);
    });
  });
  describe("with ArrayBuffer", function() {
    it("works", function() {
      var buffer = new Uint8Array(data).buffer;
      var dataView = new DataView2(buffer);

      assert(dataView.getFloat32(0) === Math.fround(1.234));
      assert(dataView.getFloat32(4) === Math.fround(5.678));
      assert(dataView.buffer === buffer);
      assert(dataView.byteLength === 8);
    });
  });
});
describe("Buffer2", function() {
  var Buffer2 = dataview2.Buffer2;

  describe("in the Node.js", function() {
    it("works", function() {
      var buffer = new Buffer2(32);

      assert(buffer instanceof Buffer);
    });
  });
});
