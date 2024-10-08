/*
    Variables are used to store data values. 
    In JavaScript, we use the var keyword to declare variables. 
    Variables are case-sensitive, meaning that myVar, myvar, and MYVAR are all different variables. 
    Variables can be declared without a value, and the value can be assigned later. 
    Variables can also be assigned a value when they are declared. 
    Variables can be declared and assigned values in the same statement. 
    Variables can be reassigned a value

    - Syntax: var variableName = value;
    - Example: var x = 5;

    - if any html element has an id attribute, we can access it using the document object and the id attribute value because it is like a global variable.

    * Identifiers Name Conventions And Rules:
    - The first character must be a letter, an underscore (_), or a dollar sign ($).
    - Subsequent characters may be letters, digits, underscores, or dollar signs.
    - JavaScript is case-sensitive.
    - Reserved words (like JavaScript keywords) cannot be used as identifiers.
    - We use Camel Case for naming variables, functions, and objects.
*/

var myName = "Mohamed";
console.log(myName); // Mohamed

var number = 5;
console.log(number); // 5

// an html element with an id attribute value of hello 
console.log(hello);
hello.innerHTML = "Hello World!";
console.log(hello); 