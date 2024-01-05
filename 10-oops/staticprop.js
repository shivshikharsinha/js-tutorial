class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
    static createId(){
        return `123`
    }
}
const shiv = new User('hitesh')
// console.log(shiv.createId())

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}
const iphone = new Teacher ('Iphone 15 Pro', 'i@phone.com')
console.log(iphone.logMe());