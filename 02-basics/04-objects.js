// const tinderUser = new Object()      //this is a singleton object
const tinderUser = {}                   //this is not a  singleton object

tinderUser.id = "123abc"
tinderUser.name = "Shiv"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "shiv@gmail.com",
    fullname: {
        userfullname: {
            firstname: "shiv",
            middlename: "shikhar",
            lastname: "sinha"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "sss@gmail.com"
    },
    {
        id: 1,
        email: "sss@gmail.com"
    },
    {
        id: 1,
        email: "sss@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "video editing 101",
    price: "2999",
    courseInstructor: "shiv"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "shiv",
//     "coursename": "video editing 101",
//     "price": "free"
// }

[
    {},
    {},
    {}
]