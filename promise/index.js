// const promiseOne = new Promise((resolve,reject)=>{
//     // Do any Async Task
//     // DB Call
//     setTimeout(function(){
//         console.log("Aysn Task Completed")
//         resolve();
//     },2000)
// })
// promiseOne.then(()=>{
//     console.log("Fullfilled")
// })

// function sayName(name){
//     console.log(`Aysn Task Completed by ${name}`)
// }
// new Promise((resolve,reject)=>{
//     setTimeout(sayName,1000,"aamir")
//     resolve()
// }).then(()=>{
//     console.log("COMPLETED");
// })

// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Async Promise-3")
//         resolve()
//     },1000)
// }).then(()=>{
//     console.log("COMPLETED-2")
// })

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(function () {
//     console.log('Promise-4')
//     let error = false
//     if (!error) {
//       resolve({ username: 'aamir', password: '1234567' })
//     } else {
//       reject('ERROR: Something Went Wrong')
//     }
//   }, 1000)
// })
// myPromise
//   .then(name => {
//     console.log('Promise-4 Fullfilled')
//     console.log(name)
//     return name.username
//   })
//   .then(username => {
//     console.log(username)
//   })
//   .catch(err => {
//     console.log(err)
//   })
//   .finally(() => {
//     console.log('Finally The Promise is either resolved or rejected')
//   })

//   We can also handle promise using Async/Await
// const promiseFive = new Promise((resolve,reject)=>{
//     setTimeout(function () {
//         console.log('Promise-5')
//         let error = true
//         if (!error) {
//           resolve({ username: 'JS', password: '1234567' })
//         } else {
//           reject('ERROR: JS Went Wrong')
//         }
//       }, 1000)
// })
// async function consumedPromise(){
//     try {
//         const res = await promiseFive;
//     console.log(res);
//     } catch (error) {
//         console.log(error);
//     }
// }
// consumedPromise()

// Async Code Of JS (Event Loop)
setTimeout(function () {
  console.log('SetTimeout-1')
}, 1000)
setTimeout(function () {
  console.log('SetTimeout-2')
}, 1000)
setTimeout(function () {
  console.log('SetTimeout-3')
}, 1000)
setTimeout(function () {
  console.log('SetTimeout-4')
}, 1000)

setTimeout(() => console.log('1'), 1000)
setTimeout(() => console.log('2'), 1000)
setTimeout(() => console.log('3'), 1000)
setTimeout(() => console.log('4'), 1000)
