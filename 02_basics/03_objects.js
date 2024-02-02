//declaring object => two methods(literal and constructor)
//singleton => through constructor we declare object then it is a singleton
//using literal method to declaring (instances are made in this not singleton)

//object literal

const mySym = Symbol("Key1");
const Jsuser = {
  name: "Ghazia",
  "full name": "Ghazia Maqbool",
  [mySym]: "key1",
  // mySym: "key1",  //for investigative study
  age: "24",
  location: "Wah Cantt",
  email: "ghazia@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday", "Sunday"],
};
console.log(Jsuser.email); //using dot notation ghazia@google.com
console.log(Jsuser["email"]); //using bracket notation ghazia@google.
/*
let us access full name by dot notation 
*/
// console.log(Jsuser.full name) // this will gives error because full name is not a valid identifier
// to access full name we will use bracket notation
console.log(Jsuser["full name"]); // this will gives full name Ghazia Maqbool
// console.log(Jsuser.mySym) //key1
// console.log(typeof Jsuser.mySym) //string
console.log(Jsuser[mySym]); //key1
console.log(typeof Jsuser[mySym]);
console.log(Jsuser);
console.log(typeof Jsuser);

//let us update an element in object
Jsuser.email = "ghazia@chatgpt.com";
console.log(Jsuser.email); //update emails value to ghazia@chatgpt.com
//to freeze an object that its vale is never change
// Object.freeze(Jsuser)
// Jsuser.email = "ghazia@microsoft.com"
// console.log(Jsuser.email) // it is not updated giving previous value becuase of freeze method

// adding function to jsusers (can use functions as variables)
Jsuser.greeting = function () {
  console.log("Hello JS User");
};
// console.log(Jsuser.greeting) // [Function (anonymous)] it pass function but dont print its value
console.log(Jsuser.greeting()); //Hello JS user

//string interpolation
Jsuser.greetingone = function () {
  console.log(`Hello JS User, ${this.name} `);
};
console.log(Jsuser.greetingone()); //Hello JS User, Ghazia

/*while execution of above code we have a value undefined which is because one 
execution has been done by its own .
*/

//interview question take a symbol and add it in objects keys and print it
//mySym: "key1" make it a symbol and add it in object keys like this
//by this it will give a value byte it is not a symbol it will work as string
