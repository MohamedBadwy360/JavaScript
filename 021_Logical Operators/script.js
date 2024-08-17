/*
    Logical Operators
    - ! Not
    - && And
    - || Or

    Truth Table: 
    - AND
        - true && true = true
        - true && false = false
        - false && true = false
        - false && false = false
    - OR
        - true || true = true
        - true || false = true
        - false || true = true
        - false || false = false
    - NOT 
        - !true = false
        - !false = true 
*/

console.log(true);
console.log(!true);

console.log(!(10 == "10"));

console.log(10 == "10" && 10 > 8 && 10 > 50);

console.log(10 == "10" || 10 > 80 || 10 > 50);