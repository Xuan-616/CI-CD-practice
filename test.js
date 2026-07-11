const { add } = require('./math.js');

function assert(condition, message) {
  if (!condition) throw new Error("測試失敗: " + message);
  console.log("✅ " + message);
}

assert(add(1, 2) === 3, "1+2 應該等於 3");
assert(add(-1, 1) === 0, "-1+1 應該等於 0");

console.log("全部測試通過！");
