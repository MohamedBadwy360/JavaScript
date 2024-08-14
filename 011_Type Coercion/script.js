/*
    * Type Coercion (Type Casting) *
    -------------
    - +
    - -
    - "" - 2
    - false - true
*/

let a = "20";
let b = 10;
let c = true;

console.log(a + b);     // 2010 (as string)
console.log(+a + b);    // 30
console.log(a - b);     // 10
console.log(+a - b);    // 10

console.log(b + c);     // 11
console.log(b - c);     // 9
console.log(a + c);     // 20true (as string)
console.log(a - c);     // 19
console.log(c - a);     // -19
console.log(c + a);     // true20 (as string)
console.log(+a + c);    // 21
console.log(+a - c);    // 19
console.log(+c + a);    // 120 (as string) as c is true, it is converted to 1
console.log(+c + +a);   // 21

console.log(a + b + c); // 2010true (as string)
console.log(a - b - c); // 9
console.log(+a + +b + +c); // 31

console.log(+"");       // 0
console.log("" + b);    // 10 (as string)
console.log(+"" + b);   // 10 (as number)
console.log("" - 2);    // -2 (as number)
console.log(0 - 2);     // -2 
console.log("" - b);    // -10 (as number)