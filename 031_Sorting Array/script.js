/*
  Arrays Methods [Sort]
  - sort(Function [Opt]) => sort the array elements in ascending order (alphabetically) and return the sorted array (it will change the original array) 
  - reverse => reverse the array elements and return the reversed array (it will change the original array)
*/

let myFriends = [10, "Sayed", "Mohamed", "90", 9000, 100, 20, "10", -20, -10];

console.log(myFriends); // [10, "Sayed", "Mohamed", "90", 9000, 100, 20, "10", -20, -10]
// console.log(myFriends.sort().reverse());
console.log(myFriends.sort()); // [-10, -20, 10, "10", 100, 20, 90, 9000, "Mohamed", "Sayed"]
console.log(myFriends.reverse()); // ["Sayed", "Mohamed", 9000, 90, 20, 100, "10", 10, -20, -10]
