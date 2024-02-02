const marvel_heros = ["spiderman", "batman", "thor"];
const dc_heros = ["superman", "wonderwoman", "flash"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros); //["spiderman", "batman", "thor", ["superman", "wonderwoman", "flash"]]
// console.log(marvel_heros[4]); //["superman", "wonderwoman", "flash"] it will give us the whole array and consider it as element

// console.log(marvel_heros[3][2]); //flash

// const marvel_heros1=marvel_heros.concat(dc_heros);
// console.log(marvel_heros1);  //[ 'spiderman', 'batman', 'thor', 'superman', 'wonderwoman', 'flash' ]

//we will use spread instead of concatinate because in spread we can add more than 2 elements or arrays
const marvel_heros1 = [...marvel_heros, ...dc_heros];
// console.log(marvel_heros1); //[ 'spiderman', 'batman', 'thor', 'superman', 'wonderwoman', 'flash' ]

//flat=>used to return a new array with all subsets
const another_arr = [1, 2, 3, [4, 5, 6], 7, [8, 9, [4, 5]]];
const real_another_arr = another_arr.flat(Infinity);
console.log(real_another_arr);

//data scrapting
console.log(Array.isArray("Salahuddin")); //false
//converting it into array
console.log(Array.from("Salahuddin")); // ['S', 'a', 'l', 'a','h', 'u', 'd', 'd','i', 'n']
console.log(Array.from({ name: "ghazia" })); //[] intersting case

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); //[ 100, 200, 300 ]
