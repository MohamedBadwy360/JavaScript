/*
  Arrays
  - Create Arrays [Two Methods] new Array() + []
  - Access Arrays Elements
  - Nested Arrays
  - Change Arrays Elements
  - Check For Array Array.isArray(arr);
*/

let myFriends = ["Ahmed", "Mohamed", "Sayed", ["Marwan", "Ali"]];

console.log(`Hello ${myFriends[0]}`); // Hello Ahmed
console.log(`Hello ${myFriends[2]}`); // Hello Sayed
console.log(`${myFriends[1][2]}`); // h
console.log(`Hello ${myFriends[3][1]}`); // Hello Ali
console.log(`${myFriends[3][1][2]}`); // i

console.log(myFriends); // ["Ahmed", "Mohamed", "Sayed", ["Marwan", "Ali"]]
myFriends[1] = "Gamal"; // Change Mohamed to Gamal
console.log(myFriends); // ["Ahmed", "Gamal", "Sayed", ["Marwan", "Ali"]]
myFriends[3] = ["Sameh", "Ameer"]; // Change ["Marwan", "Ali"] to ["Sameh", "Ameer"]
console.log(myFriends); // ["Ahmed", "Gamal", "Sayed", ["Sameh", "Ameer"]]

console.log(typeof myFriends); // object
console.log(Array.isArray(myFriends)); // true
