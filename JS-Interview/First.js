// const input1 = {
//     a:1,
//     b:2,
//     c:3,
//     d:10,
//     e:12
// }
// const input2 = {
//     a:2,
//     e:12,
//     f:6,
//     d:10
// }
// let input3 = {}
// function compareObject(input1,input2){
//     // console.log(input1,input2)
//     for(let i in input1){
//         if(input1[i]==input2[i])
//         {
//             input3[i]=input1[i];
//         }
//     }
// }

// compareObject(input1,input2)
// console.log(input3)

// const inputArray = [1,2,-2,11,7,1];
// inputArray.sort((a,b)=>a-b);
// console.log(inputArray)
// // for (let index = 0; index < array.length; index++) {

// // }
// let len = inputArray.length-2;
// console.log(`Second Largest Element is ${inputArray[len]}`)

// Array Rotation
// const input = [2,7, 11,4, -2];
// console.log(input)
// input.push(input.shift());
// input.push(input.shift());
// console.log(input);

// 
// let arr = [2, 4, 6, 8];
// let arr2 = [];
// let sum = 0;

// for (let i = arr.length - 1; i >= 0; i--) {
//   sum += arr[i];
//   arr2.push(sum);
// }

// console.log(arr2);

// Missing ODD Number
let arr =[5,7,9,11,15,17];
console.log(arr);
let num = 2;
let i;
for(i=0;i<arr.length;i++){
  if(arr[i]+num!=arr[i+1]){
      break;
  }
  else{
    continue;
  }
}

console.log(`Missing ODD Number is ${arr[i]+num}`)
