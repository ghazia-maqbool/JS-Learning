const score = 400;
console.log(score); //400

const balance = new Number(100);
console.log(balance); //[Number:100]

console.log(balance.toString().length); //3
console.log(balance.toFixed(2)); //100.00

const otherNumber = 23.89669;

console.log(otherNumber.toPrecision(3)); //23.9

const hundreds = 10000000;
console.log(hundreds.toLocaleString()); //10,000,000

console.log("_____________MATHS_______________");

console.log(Math);
console.log(Math.abs(-4)); //4
console.log(Math.round(3.6)); //4
console.log(Math.ceil(3.6)); //4
console.log(Math.floor(3.6)); //3
console.log(Math.sqrt(3)); //1.73
console.log(Math.min(3, 6, 8, 9, 5, 2)); //2
console.log(Math.max(3, 6, 8, 9, 5, 2)); //9

console.log(Math.random()); //any value between 0 to 1

console.log(Math.random() * 10 + 1); //one digit shift +1 to avoid 0.09 type values
console.log(Math.floor(Math.random() * 10) + 1); // will give one value answer
console.log(Math.random() * 100); //two digit shift

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

/*Math.random give us values randomly between 0 to 1 and when we multiply
with 10 one digit is shift but in some cases we have 0.01 so it gives 0 to
avoid this we add 1 . another problem is we have to define min and max in many 
cases so we write (max - min + 1) max - min to match ranges and plus 1 to avoid zero
and also we'll add min
*/
