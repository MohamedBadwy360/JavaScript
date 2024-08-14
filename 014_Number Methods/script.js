/*
    Number Methods
    - Two Dots To Call A Methods => Number.methodName() or variableName.methodName() 
    - toString() => Convert Number To String
    - toFixed() => Convert Number To String With Specific Number Of Decimal Points
    - parseInt() => Convert String To Number
    - parseFloat() => Convert String To Float Number
    - isInteger() [ES6] => Check If Number Is Integer
    - isNaN() [ES6] => Check If Value Is Not A Number
*/

console.log((10).toString()); // 10 => "10"
console.log((10.123).toString()); // 10.123 => "10.123"
console.log(10..toString());  // 10 => "10"

// toFixed() return string
console.log((10.555325).toFixed(2)); // 10.56 => "10.56"

console.log(parseInt("10")); // 10 => 10
console.log(parseInt("10.123")); // 10 => 10
console.log(parseInt("10 Mohamed")); // 10 => 10
console.log(+("10 Mohamed")); // NaN => NaN
console.log(parseInt("Mohamed 10 Mohamed")); // NaN => NaN

console.log(parseFloat("10")); // 10 => 10
console.log(parseFloat("10.123")); // 10.123 => 10.123
console.log(parseFloat("10.123 Mohamed")); // 10.123 => 10.123
console.log(parseFloat("Mohamed 10.123 Mohamed")); // NaN => NaN

console.log(Number.isInteger("10"));    // false
console.log(Number.isInteger(10.5));    // false
console.log(Number.isInteger(10));      // true

console.log(Number.isNaN("Mohamed"));   // false
console.log(Number.isNaN(10));          // false
console.log(Number.isNaN(NaN));         // true
console.log(Number.isNaN("10 Mohamed")); // false
console.log(Number.isNaN("Mohamed" / 10));  // true