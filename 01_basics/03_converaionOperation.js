let score = "33abc"

//to check type of datatype we have these two syntax
// console.log(typeof score); 
// console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber); //number
console.log(valueInNumber); //NaN not a number

let score1 = null
console.log(typeof score1); //object

let valueInNumber1 = Number(score1);
console.log(typeof valueInNumber1);//number
console.log(valueInNumber1); //0

let score2 = undefined
console.log(typeof score2); //undefined

let valueInNumber2 = Number(score2);
console.log(typeof valueInNumber2); //number
console.log(valueInNumber2); //NaN

let score3 = true
console.log(typeof score3); //boolean

let valueInNumber3 = Number(score3);
console.log(typeof valueInNumber3);//number
console.log(valueInNumber3); //1

//conversions
//"33" =>33
//"33abc" => NaN
// true =>1 and false =>0
console.log("------------------------------------");
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); //true

let isLoggedIn1 = 0
let booleanIsLoggedIn1 = Boolean(isLoggedIn1)
console.log(booleanIsLoggedIn1); //false 

let isLoggedIn2 = ""
let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
console.log(booleanIsLoggedIn2); //false

let isLoggedIn3 = "Ghazia"
let booleanIsLoggedIn3 = Boolean(isLoggedIn3)
console.log(booleanIsLoggedIn3); //true

//1 =>true
//0 =>false
//"" =>false
//"ghazia(any name)" =>true

let someNumber = 61

let stringNumber=String(someNumber)
console.log(stringNumber); //61
console.log(typeof stringNumber); //string

console.log("_________________________Operations__________________________")

let value = 3
let negValue = -value
// console.log(negValue); //-3

// console.log(2+2);//4
// console.log(2-2);//0
// console.log(2*2);//4
// console.log(2**3);//8
// console.log(2/3);//0.6666666666666666
// console.log(2%3);//2

let str1 = "hello"
let str2 = " ghazia"

let str3 = str1 + str2
console.log(str3); //hello ghazia

console.log("1" + 2); //12
console.log(1 + "2"); //"12"
console.log("1" + "2"); //"12"
console.log("1" + 2 + 2); //"122"
console.log(1 + 2 + "2"); //32

console.log(+true); //1
console.log(true); //true
console.log(+""); //0

let num1, num2, num3

num1 = num2 = num3 =2 + 2 

let gameCounter =100
gameCounter++;
console.log(gameCounter); //101

let gameCounter1 =100
++gameCounter1;
console.log(gameCounter1); //101