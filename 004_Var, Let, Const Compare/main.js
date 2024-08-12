/*
    * Var, Let, Const Compare:
        - Var:
            + Function scope
            + Can be re-declared
            + Undefined when accessing a variable before it's declared
            + Can be reassigned
            + Added to Window object when declared in global scope and can cause Variable Scope Drama
        - Let:
            + Block scope
            + Cannot be re-declared
            + ReferenceError when accessing a variable before it's declared
        - Const:
            + Block scope
            + Cannot be re-declared
            + Must be initialized with a value
            + ReferenceError when accessing a variable before it's declared
            + Cannot be reassigned
*/

// Var
console.log(a); // undefined
var a = 1;
var a = 2;
console.log(a); // 2

// Let
// console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 1;
// let b = 2; // SyntaxError: Identifier 'b' has already been declared

// Const
// console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 1;
// const c = 2; // SyntaxError: Identifier 'c' has already been declared