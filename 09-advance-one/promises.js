const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, cryptography, network calls
    setTimeout(function(){
        console.log('Async Task is complete')
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log('Promise Consumed');
})
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async Task 2');
        resolve()
    }, 1000)
}).then(function(){
    console.log('Async 2 resolved');
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@chaiaurcode.com"})
    }, 1000)
})
promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Shiv", password: "123"})
        }
        else{
            reject('ERROR! SOMETHING WENT WRONG')
        }
    }, 1000)
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(err){
console.log(err);
}).finally(()=>{
    console.log("The Promise is either resolved or rejected")
})
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Javascript", password: "123"})
        }
        else{
            reject('ERROR! JS WENT WRONG')
        }
    }, 1000)
})

async function consumePromiseFive(){
        try{
            const response = await promiseFive
        console.log(response);
        }
        catch(err){
            console.log(err)
        }
}
consumePromiseFive()

// async function getAllUsers(){
//    try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         // console.log(response);

//         const data = await response.json()
//         console.log(data);
//    } catch (error) {
//         console.log("E: ", error);
//    }
// }
// getAllUsers()

fetch('https://api.github.com/users/shivshikharsinha').then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
})
.catch((error) => console.log(error))