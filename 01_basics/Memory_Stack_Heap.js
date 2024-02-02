//Stack(Primitive) copy of variable, Heap(Non-Primitive) refernce of original value
//Stack is a data structure that follows Last In First Out (LIFO) principle.
//Heap is a data structure that follows First In First Out (FIFO) principle.
//Stack is used to store data in a particular order.
//Heap is used to store data in a particular order.
//Primitive => String, Number, Null, Undefined, Symbol, Boolean, BigInt
//Non-Primitive => Array, Object, Function

let myYoutubename = "ghazia";
let anothername = "ghaziamaqbool";

console.log(myYoutubename);
console.log(anothername);
console.log(myYoutubename === anothername); //false
/*when we make variable myYoutubename = "ghazia" it will save in stack
and anothername will save in another stack. copy is generated
*/

let userOne = {
  email: "user@google.com",
};
// this data is saved in heap and by refernce it is assigned
// to userOne and same in the case of userTwo
let userTwo = userOne;

userTwo.email = "user2@google.com";

console.log(userOne.email); //user2@google.com
console.log(userTwo.email); //user2@google.com
// as the refernce for both users are same so when we change it it changes for both
