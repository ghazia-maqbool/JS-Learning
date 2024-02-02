//  to declare constant we only have one method to declare constant we use const keyword
const accountId = 144553;

/*to declare variable we have two method one is with var and other is with let
Prefer not to use var
because of issues in functional and block scope
*/
let accountEmail = "samanmaqbool@gmail.com";
var accountPassword = "123saman";

// if we doesn't write var,let or const it will consider as variable
accountCity = "Lahore";

// accountId = 2 this is not allowed as accountId is constant which never changes
// let accountState; this will give undefined value
accountEmail = "saman123@gmail.com";
accountPassword = "123123";
accountCity = "Karachi";

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
console.log(accountId);
