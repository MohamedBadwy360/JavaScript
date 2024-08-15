
/*
    String Methods
    - Access With Index => [] => start from 0 index and if not found return * undefined *
    - Access With charAt() => start from 0 index and if not found return * empty string *
    - length => property that return the number of characters in the string
    - trim() => remove white spaces from start and end of the string
    - toUpperCase() => convert the string to upper case
    - toLowerCase() => convert the string to lower case
    - Chain Methods => you can chain multiple methods together
*/

let theName = "  Ahmed  ";

console.log(theName);
console.log(theName[1]);
console.log(theName[5]);

console.log(theName.charAt(1));
console.log(theName.charAt(5));

console.log(theName.length);
console.log(theName.trim());

console.log(theName.toUpperCase());
console.log(theName.toLowerCase());

console.log(theName.trim().charAt(2).toUpperCase());