//Dates

let myDate = new Date()
console.log(myDate); //2024-01-31T10:46:45.024Z
console.log(myDate.toString()); //Wed Jan 31 2024 15:47:28 GMT+0500 (Pakistan Standard Time)
console.log(myDate.toDateString()); //Wed Jan 31 2024
console.log(myDate.toISOString()); //2024-01-31T10:51:28.372Z
console.log(myDate.toJSON()); //2024-01-31T10:51:28.372Z
console.log(myDate.toLocaleDateString()); //1/31/2024
console.log(myDate.toLocaleString()); //1/31/2024, 3:51:28 PM
console.log(myDate.toLocaleTimeString()); //3:51:28 PM

console.log(typeof myDate); //object

//declaring specific date
let myCreatedDate = new Date(2024,0,23) //month in JS starts from 0
console.log(myCreatedDate); //2024-01-22T19:00:00.000Z
console.log(myCreatedDate.toDateString()); //Tue Jan 23 2024

let myCreatedDate1 = new Date(2024,0,23,5,3) 
console.log(myCreatedDate1.toLocaleString()); //1/23/2024, 5:03:00 AM

let myCreatedDate2 = new Date("2024-01-12")
console.log(myCreatedDate2.toDateString()); //Fri Jan 12 2024

//timestamp

let myTimeStamp = Date.now()
console.log(myTimeStamp); //1706699180933 in milisec
console.log(myCreatedDate2.getTime());
console.log(Math.floor(Date.now()/1000)); 


let newDate = new Date()
// console.log(newDate.getMonth()+1); //1

newDate.toLocaleString('default',{
     weekday: 'long'
     }); 