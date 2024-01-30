//Primitive and non-Primitive
/*we have a concept of 
call by value and call by reference
the difference is on the basis of how they are store in memory
and how can we access it */


// Primitive  (call by value)
// Primitive type => String, Number, Boolean, Null, Undefined, Symbol ,BigInt

//Reference type or Non-Primitive (call by reference)
//Non-Primitive type => Object, Function, Array

//type of JavaScript
//JavaScript is a dynamic typed language(variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it.
// You can assign different types of values to a variable during its lifetime.)

const score =100
const scoreValue =100.3

const isLoggedIn =false
const outsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId); //false

const bigNumber = 1234567890123456789012345678901234567890n


const heros = ["batman","superman","spiderman"] //arrays
let myObject = {
    name: "ghazia",
    age: 24,
}

const myFunction = function(){
console.log("hello world");
}

console.log(typeof score); //number
console.log(typeof scoreValue); //number
console.log(typeof isLoggedIn); //boolean
console.log(typeof outsideTemp); //object
console.log(typeof userEmail); //undefined
console.log(typeof id); //symbol
console.log(typeof bigNumber); //bigint
console.log(typeof heros); //object 
/* 
 arrays are a special kind of objects.
 Arrays inherit from the Object prototype and have additional properties 
 and methods, such as length and push. However, the typeof 
 operator does not distinguish between arrays and plain objects,
  and returns “object”
*/
console.log(typeof myObject); //object
console.log(typeof myFunction); //function it is also called as obj function

