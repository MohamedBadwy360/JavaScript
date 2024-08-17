/*
    Comparison Operators
    - == Equal => Compare the value only
    - != Not Equal => Compare the value only

    - === Identical => Compare the value and the type
    - !== Not Identical => Compare the value and the type

    - > Larger Than => Compare the value only
    - >= Larger Than Or Equal => Compare the value only

    - < Smaller Than => Compare the value only
    - <= Smaller Than Or Equal => Compare the value only
*/

console.log(10 == "10"); // true
console.log(-10 == "-10"); // true
console.log(10 == 10); // true
console.log(10 != "10"); // false
console.log("-------------------");
console.log(10 === "10"); // false
console.log(-10 === "-10"); // false
console.log(10 === 10); // true
console.log(10 !== "10"); // true
console.log(10 !== 10); // false
console.log("-------------------");
console.log(10 > 20);   // false
console.log(10 > 10);   // false
console.log(10 >= 10);  // true
console.log(10 > "5");  // true
console.log(10 > "20"); // false
console.log(10 >= "10"); // true
console.log("-------------------");
console.log(10 < 20);   // true
console.log(10 < 10);   // false
console.log(10 <= 10);  // true
console.log(10 < "5");  // false
console.log(10 < "20"); // true
console.log(10 <= "10"); // true
console.log("-------------------");