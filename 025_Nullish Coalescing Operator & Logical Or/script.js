/*
  Logical Or ||
  -- Null + Undefined + Any Falsy Value
  Nullish Coalescing Operator ??
  -- Null + Undefined
*/

console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log(Boolean("")); // false
console.log(Boolean(0)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(false)); // false
console.log(Boolean(1)); // true
console.log(Boolean(-1)); // true
console.log(Boolean("-1")); // true

let price = null;

console.log(price || 100); // 100
console.log(price ?? 100); // 100
