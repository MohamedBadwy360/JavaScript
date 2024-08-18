/*
  Arrays Methods [Joining]
  - concat(array, array) => Concatenate Two Arrays And Return New Array
  - join(Separator) => Join the array and return A String With Separator [Default Is Comma]
*/

let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
let myNewFriends = ["Samar", "Sameh"];
let schoolFriends = ["Haytham", "Shady"];

let allFriends = myFriends.concat(myNewFriends, schoolFriends, "Gamal", [
  "Sayed",
  "Shawqar",
]);
console.log(allFriends); // ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer", "Samar", "Sameh", "Haytham", "Shady", "Gamal", "Sayed", "Shawqar"]

console.log(myFriends.join()); // Ahmed,Sayed,Ali,Osama,Gamal,Ameer
console.log(myFriends.join(" ")); // Ahmed Sayed Ali Osama Gamal Ameer
console.log(myFriends.join(" - ")); // Ahmed - Sayed - Ali - Osama - Gamal - Ameer
console.log(myFriends.join(" * ")); // Ahmed * Sayed * Ali * Osama * Gamal * Ameer
console.log(allFriends.join("")); // AhmedSayedAliOsamaGamalAmeerSamarSamehHaythamShadyGamalSayedShawqar
console.log(allFriends.join(" @ ")); // Ahmed @ Sayed @ Ali @ Osama @ Gamal @ Ameer @ Samar @ Sameh @ Haytham @ Shady @ Gamal @ Sayed @ Shawqar
console.log(allFriends.join("|")); // Ahmed|Sayed|Ali|Osama|Gamal|Ameer|Samar|Sameh|Haytham|Shady|Gamal|Sayed|Shawqar
console.log(allFriends.join("|").toUpperCase()); // AHMED|SAYED|ALI|OSAMA|GAMAL|AMEER|SAMAR|SAMEH|HAYTHAM|SHADY|GAMAL|SAYED|SHAWQAR
