//1. Largest Element in an Array
// let arr = [2,4,12,44,67,34]
// let max = arr[0]

// for(let i = 1;i < arr.length;i++){
//     if(arr[i] > max)
//         max = arr[i]
// }

// console.log(`Smallest Element in Array is ${max}`)
//2. Smallest Element in Array
// let min = arr[0]
// for(let i = 1; i < arr.length; i++){
//     if(arr[i] < min)
//         min = arr[i]
// }

// console.log(`Smallest Element in Array is ${min}`)
// 3. Reverse a String
// let str = "aamir"
// let newStr = str.split("")
// let result = []
// let i,j;
// console.log("11")
// for(i = newStr.length,j=0;i>=0;i--,j++){
//     result[j] = newStr[i]
// }

// console.log(result.join(''))
// 4. Reverse an Array
// let i , j;
// let newArr = []
// console.log(arr)

// for(i=arr.length-1,j=0;i>=0;i--,j++){
//     newArr[j] = arr[i]
// }
// console.log(newArr)

// Check if String is Palindrome
// let str = "madam";
// let newStr = str.split("")
// console.log(newStr)
// let i,j;
// let flag = 0;
// for(i = newStr.length-1,j = 0;i>=0;i--,j++){
//     console.log(newStr[i],newStr[j])
//     if(newStr[i] === newStr[j]){
//         flag = 1;
//     }
// }
// if(flag === 1){
//     console.log("String is Palindrome")
// }else{
//     console.log("Not Palindrome")
// }
// 5. Rotate an Array

// let arr = [2, 4, 10, 12, 6]
// for (let j = 0; j < 3; j++) {

//     let first = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i + 1]
//     }
//     arr[arr.length-1] = first
// }

// console.log(arr)

// 6. Find Duplicate Elements in an Array
// let arr = [5,4,6,2,3,6,12,4,1]
// let duplicates = []
// let i,j;
// for(i =0;i<arr.length;i++){
//     for(j = i+1;j<arr.length;j++){
//         if(arr[i] === arr[j] && !duplicates.includes(arr[i])){
//             duplicates.push(arr[i])
//         }
//     }
// }

// if(duplicates.length > 0){
//     console.log(duplicates)
// }else{
//     console.log("No duplicates found")
// }
// 7. Two Sum Problem

// let arr = [3,14,6,18,10]
// let left = 0;
// let right = arr.length - 1;
// let res = []
// let target = 16
// arr.sort((a,b)=> a-b)
// while(left < right){
//     let sum = arr[left] + arr[right]
//     console.log(arr[left],arr[right])
//     if(sum === target){
//         res.push(arr[left])
//         res.push(arr[right])
//         break;
//     }else if(sum < target){
//         left ++;
//     }else{
//         right --;
//     }
// }
// let target = 16;

// for(let i =0;i<arr.length;i++){
//     for(let j = i+1;j<arr.length;j++){
//         // console.log(arr[i]+arr[j])
//         if(arr[i]+arr[j] === target){
//             res.push(arr[i])
//             res.push(arr[j])
//         }
//     }
// }

// console.log(res)
// 8 Merge two Sorted Arrays
// let arr1 = [2,4,6,8]
// let arr2 = [10,12,14,16]
// let res = []

// let n = arr1.length + arr2.length;
// console.log(n)
// let i = 0;
// while (i < n) {
//     if(i < 4){
//         console.log(i)
//         res.push(arr1[i])
//     }else{
//         console.log(i)
//         res.push(arr2[i-arr2.length])
//     }
//     i++;
// }
// for(i = 0;i< arr1.length;i++){
//     res.push(arr1[i])
// }
// console.log(i)
// for(;i<n;i++){
//     res.push(arr2[i])
// }

// console.log(res)
// 9. Merge Two sorted Arrays without Extra Space
// let arr1 = [1,5,9,10,15,20]
// let arr2 = [2,3,8,13]
// let m = arr1.length
// let p = arr2.length

// for(let i =0;i<arr2.length;i++){
//     arr1.push(arr2[i])
// }

// console.log(arr1)

// 10 Maximum Subarray Sum
let arr = [2, 3, -8, 7, -1, 2, 3]
let sum = arr[0];
for(let i = 0; i< arr.length;i++){
    let currSum = 0;
    for(let j = i; j< arr.length; j++){
        currSum = currSum + arr[j];
        sum = Math.max(currSum,sum)
    }
}
console.log(sum)