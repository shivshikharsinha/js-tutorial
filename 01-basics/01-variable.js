const accountId = 2001331
let accountEmail = "shivshikhar@hotmail.com"
var accountPassword = "12903478"
accountCity = "Noida"
// accountId = 2 // not allowed  
accountEmail = "shiv@hotmail.com"
accountPassword = "69696969"
accountCity = "Patna"
let accountState;

console.log(accountId);

/* 
Prefer not to use var
because of issue in Block Scope and Functional Scope 
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);