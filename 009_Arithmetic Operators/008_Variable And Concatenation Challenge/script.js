/*
    Arithmetic Operators
    + Addition
    - Subtraction
    * Multiplication
    / Division 
    ** Exponentiation (ES7) => 2 ** 4 = 2 * 2 * 2 * 2
    % Modulus (Division Remainder) => 10 % 3 = 1
    ++ Increment [ Post / Pre ] 
        - Post Increment (x++) => First use the value in the expression then increment
        - Pre Increment (++x) => First increment the value then use it in the expression
    -- Decrement [ Post / Pre ]
        - Post Decrement (x--) => First use the value in the expression then decrement
        - Pre Decrement (--x) => First decrement the value then use it in the expression
*/

console.log(10 + 20);
console.log(10 + "Osama");

console.log(10 - 20);
console.log(10 - "Osama");  // NaN
console.log(typeof NaN);    // number => this is weird

console.log(10 * 20);
console.log(10 * -20);

console.log(20 / 5);
console.log(20 / 3);

console.log(2 ** 4);
console.log(2 * 2 * 2 * 2);

console.log(10 % 2);
console.log(11 % 2); // Remove 1