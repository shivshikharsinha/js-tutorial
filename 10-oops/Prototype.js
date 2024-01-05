let myName = "Shiv      "

// console.log(myName.truelength);

let myHeros = ["thor", "loki", "spiderman", "ironman"]

let heroPowers = {
    'thor' : "hammer",
    'loki' : "mischief",
    'spiderman': "web",
    'ironman' : "technology",
    getSpiderPower: function(){
        console.log(`Spidey's Power is ${this.spiderman}`);
    }
}

Object.prototype.shiv= function(){
    console.log("Shiv is present everwhere");
}

Array.prototype.heyShiv = function(){
    console.log("Shiv says Hi");
}
// heroPowers.shiv();

// myHeros.shiv();
// myHeros.heyShiv();

// heroPowers.heyShiv();

// Inheritance

const User = {
    name: 'Shiv',
    email: 'Google@gmail.com'
}

const Teacher = {
    makeVideos :  true
}
const TeachingSupport = {
    isAvailable : true
}
const TASupport = {
    makeAssignment: "JS Assignment",
    fullTime : true,
    __proto__ : TeachingSupport
}
Teacher.__proto__ = User

// Modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUsername = "ChaiAurCode     "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True Length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"iceTea".trueLength()