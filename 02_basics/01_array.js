//array

const myArr = [0 , 1 , 2 , 3 , 4 , 5]
console.log(myArr[1])

//properties of array
/* 
array => object
arrays are resizeable
arrays are mutable
it contain mixed datatype
arrays are ordered
arrays are indexed(index starts from 0)
it make shallow copies(change in original value stack
and heap concept)
*/

const myHeros = ["superman", "batman", "spiderman", "ironman"]
console.log(myHeros[0]); //superman

const myArr2 = new Array(1,2,3,4,5)
console.log(myArr2[3]); //4

//array methods

myArr.push(6)
myArr.push(7)
myArr.pop()

myArr.unshift(8); //add at the beginning
myArr.shift() //remove from the beginning
console.log(myArr); //[0, 1, 2, 3, 4, 5, 6]
console.log(myArr.includes(9)); //false
console.log(myArr.indexOf(3)); // 3

const newArr = myArr.join()
console.log(newArr); //0,1,2,3,4,5,6
console.log(myArr); //[0, 1, 2, 3, 4, 5, 6]

console.log(typeof myArr); //object
console.log(typeof newArr); //string

//slice and splice

console.log("A ", myArr); //[0, 1, 2, 3, 4, 5, 6]
const myn1 = myArr.slice(1,3)

console.log(myn1); // [1, 2]
console.log("B ", myArr); //[0, 1, 2, 3, 4, 5, 6]

const myn2 = myArr.splice(1,3)
console.log(myn2); //[1, 2, 3]  // it take [1,2,3] out from the original array
console.log("C ", myArr); //[0, 4, 5, 6]