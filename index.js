var BufferDataView = require("buffer-dataview");

function DataView2(buffer) {
  if (global.Buffer && buffer instanceof global.Buffer) {
    return new BufferDataView(buffer);
  }
  return new DataView(buffer);
}

function Buffer2(n) {
  if (global.Buffer) {
    return new global.Buffer(n);
  }
  return new Uint8Array(n).buffer;
}

module.exports = {
  DataView2: DataView2,
  Buffer2: Buffer2,
};
