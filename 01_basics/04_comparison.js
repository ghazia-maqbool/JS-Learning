// console.log(2 > 1); //true
// console.log(2 >= 1); //true
// console.log(2 < 1); //false
// console.log(2 == 1); //false
// console.log(2 != 1); //true

console.log("2" > 1); //true
console.log("02" > 1); //true

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true predictable values

console.log(undefined > 0); //false
console.log(undefined == 0); //false
console.log(null == undefined); //true
console.log(undefined < 0); //false

// === strict check vales + datatype checking
console.log("2" === 2); //false
console.log(2 === 2); //true
console.log(null === undefined); //false
