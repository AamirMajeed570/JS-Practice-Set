// console.log(1); // 1 2 4 6 20 30 50

// setTimeout(() => {
//     console.log(20);
// }, 0);

// console.log(2);

// setTimeout(()=>{
//     console.log(30)
// },2)

// console.log(4);

// setTimeout(()=>{
//     console.log(50);
// },3)

// console.log(6);

const sayAfterTwoSecond = function(name){
    console.log(`Name is ${name}`);
}

setTimeout(sayAfterTwoSecond,2000,"aamir");

setTimeout((name)=>{
    console.log(`Name is ${name}`);
},2000,"aamir")