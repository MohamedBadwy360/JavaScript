/*
  Arrays Methods [Slicing]
  - slice(Start [Opt], End [Opt] Not Including End)
  --- slice() => All Array
  --- If Start Is Undefined => 0
  --- Negative Count From End
  --- If End Is Undefined || > Indexes => Slice To The End Array.length
  --- Return New Array
  --- Not Change The Original Array
  - splice(Start [Mand], DeleteCount [Opt] [0 No Remove], The Items To Add [Opt])
  --- If Negative => Start From The End
  --- Change The Original Array
*/

let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];

console.log(myFriends.slice()); // ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"]
console.log(myFriends.slice(1)); // ["Sayed", "Ali", "Osama", "Gamal", "Ameer"]
console.log(myFriends.slice(1, 3)); // ["Sayed", "Ali"]
console.log(myFriends.slice(1, 2)); // ["Sayed"]
console.log(myFriends.slice(1, 1)); // []
console.log(myFriends.slice(-1)); // ["Ameer"]
console.log(myFriends.slice(-4)); // ["Ali", "Osama", "Gamal", "Ameer"]
console.log(myFriends.slice(-4, -2)); // ["Ali", "Osama"]
console.log(myFriends); // ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"]

// console.log(myFriends.splice(0, 0, "Mohamed", "Mahmoud")); // []
myFriends.splice(0, 0, "Mohamed", "Mahmoud");
console.log(myFriends); // ["Mohamed", "Mahmoud", "Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"]

myFriends.splice(1, 2, "Samir", "Khaled");
console.log(myFriends); // ["Mohamed", "Samir", "Khaled", "Sayed", "Ali", "Osama", "Gamal", "Ameer"]
