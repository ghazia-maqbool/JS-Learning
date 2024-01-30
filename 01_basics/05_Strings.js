const name ="Ghazia"
const repoCount = 2

//method of concatenation of string 
console.log(name + repoCount + " Value") 

//method of string concatination but by string interpolation or string literals
console.log(`Hello ${name} you have ${repoCount} repos`)

const gameName = new String("PUBG-Mobile-Game")
console.log(gameName[0]); //P
console.log(gameName.__proto__); //{}

console.log(gameName.length); //4
console.log(gameName.toUpperCase()); //PUBG
console.log(gameName.toLowerCase()); //pubg
console.log(gameName.charAt(3)); //G
//console.log(gameName.charAt(4)); //no answer
console.log(gameName.indexOf("B")); //2

const newString = gameName.substring(0, 2)
console.log(newString) //PU

const anotherString = gameName.slice(0, 2)
console.log(anotherString) //PU

const anotherString1 = gameName.slice(-3, 6)
console.log(anotherString1) //U

const newStringOne = "   ghazia    "
console.log(newStringOne.trim()); //ghazia
console.log(newStringOne);//   ghazia

const url = "https://www.goo%20gle.com"

console.log(url.replace('%20','-')) //https://www.goo-gle.com
console.log(url.includes('goo')) //true
console.log(url.includes('gopi')) //false

console.log(gameName.split('-')); //["PUBG","Mobile","Game"]