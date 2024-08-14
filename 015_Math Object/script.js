/*
    Math Object
        - round() => 0.5 and above will be rounded up and below 0.5 will be rounded down 
        - ceil() => Always Round Up
        - floor() => Always Round Down 
        - min() => Return The Lowest Number
        - max() => Return The Highest Number
        - pow() => Return The Power Of Number
        - random() => Return Random Number Between 0 and 1
        - trunc() [Es6] => Remove The Decimal Part
*/

console.log(Math.round(99.2));
console.log(Math.round(99.5));

console.log(Math.ceil(99.2));
console.log(Math.floor(99.9));

console.log(Math.min(10, 20, 100, -100, 90));
console.log(Math.max(10, 20, 100, -100, 90));

console.log(Math.pow(2, 4));
console.log(Math.random());
console.log(Math.trunc(99.5));