//ES6

// class User {
//     constructor (username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password

//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername (){
//         return `${this.username.toUpperCase()}`
//     }
// }
// const chai = new User("sss", "s3@gmail.com", "2024")
// console.log(chai.encryptPassword())
// console.log(chai.changeUsername())

// Behind the Scenes

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User ('shiv', 'sss@gmail.com', '2024')

console.log(tea.encryptPassword());
console.log(tea.changeUsername());