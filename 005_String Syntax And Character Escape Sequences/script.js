/*
    * String Syntax And Character Escape Sequences *

    - String literals are written in a variety of ways:
        - Single quotes: 'Hello'
        - Double quotes: "Hello"
        - Backticks: `Hello`

    - Backticks are extended functionality:
        - They allow us to embed variables and expressions into a string by wrapping them in ${...}, for example:
            - let name = "John";
            - alert(`Hello, ${name}!`);
    
    - Special characters:
        - To insert a special character, we can use an escape character: \.
        - For example, to insert a newline character, we can use \n.
        - There are other escape characters as well, like \r for carriage return, \', \", etc.
        - To insert a backslash, we use \\. This is called escaping the character.
        - \ => Escape character.
        - \' => Single quote.
        - \" => Double quote.
        - \ in the end of the line => Multiline string / line continuation.
        - \n => New line.
        - \r => Carriage return.
        - \t => Tab.
        - \b => Backspace.
        - \f => Form feed.
        - \v => Vertical tab.
        - \0 => Null character.
        - \xXX => Unicode character with the given hex code XX.
        - \uXXXX => Unicode character with the given hex code XXXX.
    
    - Strings are immutable:
        - Strings cannot be changed in JavaScript. It is impossible to change a character.
        - When we do something like str[0] = 'A', we are trying to change the character, but it doesn't work.
        - If we need to change a string, we need to create a new one.
*/

console.log("Hello, World!");
console.log('Hello, World!');
console.log(`Hello, World!`);
console.log("Hello, 'World!'");
console.log('Hello, "World!"');
console.log("Hello, \"World!\"");
console.log('Hello, \'World!\'');
console.log("Hello, \\ World!");
console.log("Hello, \nWorld!");
console.log("Hello, \
World!");