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