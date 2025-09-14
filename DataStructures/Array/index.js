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