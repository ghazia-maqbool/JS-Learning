//objects declaring with constructor

const instaUser = {}; //non-singleton objects
console.log(instaUser); //{}

// const youtubeUser = new Object() //singleton object
// console.log(youtubeUser); //{}

//both above values gives {} differnce is in declaring method

const youtubeUser = new Object(); //singleton object
youtubeUser.id = "1";
youtubeUser.name = "Ghazia";
youtubeUser.isLoggedIn = false;

// console.log(youtubeUser); //{id: "1", name: "Ghazia", isLoggedIn: false}

const regularUser = {
  email: "some@gmail.com",
  //nested object
  fullname: {
    userfullname: {
      firstname: "Ghazia",
      sceondname: "Maqbool",
    },
  },
};
console.log(regularUser.fullname); //{ userfullname: { firstname: 'Ghazia', sceondname: 'Maqbool' } }
console.log(regularUser.fullname.userfullname.firstname); //Ghazia

//objects merging
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

// const obj3 = {obj1, obj2}
const obj3 = Object.assign(obj1, obj2); //merging two objects
const obj4 = Object.assign({}, obj1, obj2); //merging two objects {}, it will create new object(target) others are sources

console.log(obj4); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj5 = {...obj1,...obj2} //merging two objects by spread operator
console.log(obj5); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const users = [
    {
        id:1,
        email:"ghazia@gmail.com"
    },
    {
        id:1,
        email:"ghazia@gmail.com"
    },
    {
        id:1,
        email:"ghazia@gmail.com"
    },
]

users[1].email //accesing 
console.log(youtubeUser);

console.log(Object.keys(youtubeUser)); //["id", "name", "isLoggedIn"])
console.log(Object.values(youtubeUser)); // [ '1', 'Ghazia', false ]
console.log(Object.entries(youtubeUser)); // [ [ 'id', '1' ], [ 'name', 'Ghazia' ], [ 'isLoggedIn

console.log(youtubeUser.hasOwnProperty("id")); //true
console.log(youtubeUser.hasOwnProperty("names")); //false

// console.log(obj3); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
