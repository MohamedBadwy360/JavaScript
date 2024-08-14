/*
    Number
    - Double Precision 64-bit Floating Point Format
    - Syntactic Sugar "_"
    - e
    - **
    - With Decimal
    - Number + BigInt 
    - Number Min Value
    - Number Max Value
*/

console.log(1000000); // 1000000
console.log(1_000_000); // 1000000
console.log(1e6); // 1000000
console.log(1e+6); // 1000000
console.log(1e-6); // 0.000001
console.log(1e-6 * 1e6); // 1
console.log(10 ** 6); // 1000000
console.log(1_000_000.00); // 1000000

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991 , safe integer is the maximum integer that can be represented in JavaScript without losing precision
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.MAX_VALUE + 265559956); // 1.7976931348623157e+308 (No Change) because this is the maximum value of Number in JavaScript