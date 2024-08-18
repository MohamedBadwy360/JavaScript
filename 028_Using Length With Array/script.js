/*
  Array Properties:
  - Length => return the number of elements in the array
*/

// Index Start From 0 [ 0, 1, 2, 3, 4 ]

let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa"];
console.log(myFriends.length); // 4
console.log(myFriends); // ["Ahmed", "Mohamed", "Sayed", "Alaa"]

myFriends[6] = "Osama";
console.log(myFriends); // ["Ahmed", "Mohamed", "Sayed", "Alaa", empty, empty, "Osama"]

myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa"];
myFriends[myFriends.length] = "Osama";
console.log(myFriends); // ["Ahmed", "Mohamed", "Sayed", "Alaa", "Osama"]

myFriends[myFriends.length - 1] = "Samya";
console.log(myFriends); // ["Ahmed", "Mohamed", "Sayed", "Alaa", "Samya"]

myFriends.length = 2;
console.log(myFriends); // ["Ahmed", "Mohamed"]
