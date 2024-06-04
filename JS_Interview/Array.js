// const input = [2,7,11,4,-2];
// const output = [];
// for(let i=0;i<input.length;i++){
//     let sum = 0;
//     for(let j=0;j<input.length;j++){
//         if(i==j) continue;
//         else{
//             sum += input[j];
//         }
//     }
//     output.push(sum);
// }
// console.log(output);

// !Approach Second
// const input = [2,7,11,4,-2];
// const output = [];
// let sum = input.reduce((a,b)=>a+b);
// let totalSum = [];
// for(const value of input){
//     totalSum.push(sum-value)
// }

// console.log(totalSum);

// Reduce method in JS
let arr = [1,2,3,4,5];
let res = arr.reduce((a,b)=>a+b,-10)
console.log(res);