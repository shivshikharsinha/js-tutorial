//singleton - objects made from constructor - one of its types
// Object.create - This is the way to make objects using constructors

//objects literals
const mySym = Symbol ("key1");

const JsUser = {
    name : "Shiv",
    "fullname" : "Shiv Shikhar Sinha",
    [mySym]: "mykey1sym",
    age: "22",
    location: "Greater Noida",
    email: "shivshikhar@gmail.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Saturday"]
}
// The keys are also treated as a "string" type in Javascript.
// So, to access the key using a different method, use "key". Example- JsUser["name"]

// console.log(JsUser.email)
// console.log(JsUser["location"])
// console.log(JsUser.fullname)
// console.log(JsUser[mySym])

// console.log(typeof JsUser[mySym]) //returns string ?? 

// Ans- The typeof operator is returning "string" for JsUser[mySym] because you are using it within an object literal, and the property with the symbol key is treated as a computed property. In such cases, the result of JsUser[mySym] is coerced to a string when used as a property key.

// When using "full name" format we cant access using .full name , but, when we use "fullname" format we can use .fullname and ["fullname"] .
// console.log(JsUser) // Here, it shows the mykey1sym as a Symbol key type.

JsUser.email = "shivshikharsinha@gmail.com" // easily changed
// Object.freeze(JsUser) // freezes the object to prevent changing values.
JsUser.email = "shiv@gmail.com" // This does not throw error but values don't change.
// console.log(JsUser);

JsUser.greeting = function(){
    console.log('Hello JS user');
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.fullname}`);
}
//Remember to remove Object.freeze - this was the reason why it was showing undefined
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());