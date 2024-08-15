/*
    String Methods
    - indexOf(Value [Mand], Start [Opt] 0) => Return Index for the First Occurrence
    - lastIndexOf(Value [Mand], Start [Opt] Length) => Return Index for the Last Occurrence
    - slice(Start [Mand], End [Opt] Not Include End) => Return New String from Start to End and Not Include End and Can Use Negative Values
    - repeat(Times) [ES6] => Repeat String
    - split(Separator [Opt], Limit [Opt]) => Split String to Array and Can Use Limit to Limit the Array Length and Separator is the Separator for Splitting
*/

let a = "Elzero Web School";

console.log(a.indexOf("Web"));  // 7
console.log(a.indexOf("Web", 8)); // -1 => Not Found
console.log(a.indexOf("o")); // 5
console.log(a.lastIndexOf("o")); // 15

console.log(a.slice(2, 6)); // zero
console.log(a.slice(-5, -3));   // ch

console.log(a.repeat(5));   // Elzero Web SchoolElzero Web SchoolElzero Web SchoolElzero Web SchoolElzero Web School

console.log(a.split("")); // ["E", "l", "z", "e", "r", "o", " ", "W", "e", "b", " ", "S", "c", "h", "o", "o", "l"]    
console.log(a.split("", 6)); // ["E", "l", "z", "e", "r", "o"]
console.log(a.split(" "));  // ["Elzero", "Web", "School"]
console.log(a.split(" ", 2));   // ["Elzero", "Web"]