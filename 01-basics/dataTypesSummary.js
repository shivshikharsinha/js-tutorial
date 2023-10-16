//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["Shaktiman", "Naagraj", "Doga"];
let myObj = {
    name: "Shiv",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World !");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

/* 
______________________________________________________________________________
DataType                                            Return Type               |
------------------------------------------------------------------------------|
Undefined	                                        "undefined"               |
Null	                                            "object"                  |
Boolean	                                            "boolean"                 |
Number	                                            "number"                  |
String	                                            "string"                  |
------------------------------------------------------------------------------|
Non - Primitive Types -                             "Object/ Object Function" |
------------------------------------------------------------------------------|
*/

// ************************ STACK AND HEAP MEMORY *************************

//  Stack (Primitive) , Heap (Non-Primitive) 
 
let myName = "Shiv Shikhar Sinha"
let anothername = "FLASHIV"; 
anothername = "SSSinhaOfficial"
console.log(anothername);
console.log(myName);
// A separate stack memory is allocated to store this value. 
// Any changes to this does not affect the original myName variable. 
// Changes reflect only in the copy of the variable.

let UserDetails = {
    name : "Shiv Shikhar Sinha",
    userEmail: "sss@hotmail.com"
}
let UserDetailsDuplicate = UserDetails;

UserDetailsDuplicate.userEmail = "sssinha@hotmail.com";
console.log(UserDetails);
console.log(UserDetailsDuplicate);

// The data in the UserDetailsDuplicate is referenced to the same heap memory of the UserDetails.
// So, even if we change the value of userEmail in the "UserDetailsDuplicate", the actual value (original one) is changed
// and reflected when we console.log "UserDetails".