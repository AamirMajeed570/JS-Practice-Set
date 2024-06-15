console.log("Start");

setTimeout(()=>{
    console.log('SetTimeout-1')
    setTimeout(()=>{
        console.log('Nested SetTimeout-1');
    },1000)

    Promise.resolve().then(()=>{
        console.log('Promise inside SetTimeout-1');
    })
},2000)

setTimeout(()=>{
    console.log('SetTimeout-2');
},1000)

Promise.resolve().then(()=>{
    console.log('Promise 1');
})

Promise.resolve().then(()=>{
    console.log('Promise-2')
    setTimeout(()=>{
        console.log('Nested SetTimeout 2');
    },0)
})

console.log("End");

// Promises are stored in Microtask Queue while as timers are stored in Macrotask Queue