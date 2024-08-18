/*
  Arrays Methods [Adding And Removing]
  - unshift("", "") Add Element To The First
  - push("", "") Add Element To The End
  - shift() Remove First Element From Array
  - pop() Remove Last Element From Array
*/

let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa"];
console.log(myFriends); // ["Ahmed", "Mohamed", "Sayed", "Alaa"]
myFriends.unshift("Osama", "Nabil"); // Add Element To The First
console.log(myFriends); // ["Osama", "Nabil", "Ahmed", "Mohamed", "Sayed", "Alaa"]

myFriends.push("Sameh", "Khaled"); // Add Element To The End
console.log(myFriends); // ["Osama", "Nabil", "Ahmed", "Mohamed", "Sayed", "Alaa", "Sameh", "Khaled"]

let first = myFriends.shift(); // Remove First Element From Array
console.log(myFriends); // ["Nabil", "Ahmed", "Mohamed", "Sayed", "Alaa", "Sameh", "Khaled"]
console.log(`First Name Is ${first}`); // First Name Is Osama

let last = myFriends.pop(); // Remove Last Element From Array
console.log(myFriends); // ["Nabil", "Ahmed", "Mohamed", "Sayed", "Alaa", "Sameh"]
console.log(`Last Name Is ${last}`); // Last Name Is Khaled
