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
// let arr = [1,2,3,4,5];
// let res = arr.reduce((a,b)=>a+b,-10)
// console.log(res);

// let obj1 ={a:1,b:2,c:3,d:10,e:12};
// let obj2 = {a:2,e:12,f:6,d:10}
// let obj3 = {}
// function compare(obj1,obj2){
//     for(let i in obj1){
//         if(obj1[i]==obj2[i]){
//             obj3[i]=obj1[i];
//         }
//     }
//     return obj3;
// }
// console.log(compare(obj1,obj2));

// Second Largest Element in an Array

let arr = [1,2,-2,11,7,1];
let largest = -Infinity;
let secLargest = -Infinity;
for(let i=1;i<arr.length;i++){
    if(arr[i]>largest){
        secLargest = largest;
        largest = arr[i]
    }
    else if(arr[i]> secLargest && arr[i]!== largest){
        secLargest = arr[i];
    }
}
console.log(secLargest);