/*
    - + Unary Plus [Return Number If Its Not Number]
    - - Unary Negation [Return Number If Its Not Number + Negates It]
    
    Tests
    - Normal Number
    - String Number
    - String Negative Number
    - String Text
    - Float
    - Hexadecimal Numeral System => 0xFF
    - null
    - false
    - true
*/

console.log(+100);         // 100 as Number
console.log(+"100");       // 100 as Number
console.log(+"-100");      // -100 as Number
console.log(+"Hello");     // NaN
console.log(+10.5);        // 10.5 as Number
console.log(+0xff);        // 255 as Number
console.log(+null);        // 0 as Number
console.log(+false);       // 0 as Number
console.log(+true);        // 1 as Number

console.log(-100);         // -100 as Number
console.log(-"100");       // -100 as Number
console.log(-"-100");      // 100 as Number
console.log(-"Hello");     // NaN
console.log(-10.5);        // -10.5 as Number
console.log(-0xff);        // -255 as Number
console.log(-null);        // -0 as Number
console.log(-false);       // -0 as Number
console.log(-true);        // -1 as Number

// Using Number() Constructor
console.log(Number("100"));