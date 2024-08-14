/*
    * Template Literals (Template Strings) *
    ------------------------------------------
    - We can use backticks (`) to create template literals.
    - We can use placeholders (${expression}) to embed expressions in template literals.
    - We can use multi-line strings without any hacks.
    - We can use tagged templates to parse template literals with a function.
*/

let a = "We Love";
let b = "JavaScript";
let c = "and";
let d = "Programming";

// Using Concatenation
console.log(a + " " + b + " " + c + " " + d);
console.log(a + " " + b + 
"\n" + c + " " + d);

// Using Template Literals
console.log(`${a} ${b} ${c} ${d}`);
console.log(`${a} ${b} 
${c} ${d}`);
console.log(`${a} ${b}\n${c} ${d}`);
console.log(`${a} ${b} "" '' \\ ${c} ${d}`);

// ---------------------------------------

let title = "Mohamed";
let description = "Mohamed is a Web Developer.";
let markup = `
    <div class="card">
        <div class="child">
            <h2 class="title">${title}</h2>
            <p class="description">${description}</p>
        </div>
    </div>
`;

document.write(markup);