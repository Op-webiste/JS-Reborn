const accountId = 100
let accountEmail = "atifgmail.com"
var accountPassword ="12345"
accountCity = "Lahore" /* This is not good practice in js*/

let accountState;

console.log(accountId);

/*
Prefer to use const and let mostly,
Prefer Not to use Var,
becasue of issue in block scope and functional scope.

*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])