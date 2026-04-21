// Linear Search

// let arr = [12,25,8,10,32]
// let searchEle = 8;

// function linearSearch(arr,searchEle) {
//     let left = 0;
//     let right = arr.length-1;

//     while(left <= right) {
//         let mid = Math.floor((left+right)/2);
//         if(arr[mid] === searchEle){
//             return mid;
//         }
//         else if(arr[mid] < searchEle){
//             right = mid -1;
//         }else{
//             left = mid + 1;
//         }
//     }
//     return -1;
// }

// let result = linearSearch(arr,searchEle);
// if(result === -1) {
//     console.log("Element not found in the array");
// }else{
//     console.log("Element found at index: " + result);
// }

// let arr = [1,2,3,4,5];

// function rotateArray(arr,k) {
//     for(let i = 0;i<k;i++){
//         let last = arr[arr.length-1];
//         for(let j = arr.length-1;j>0;j--){
//             console.log(arr[j],arr[j-1]);
//             arr[j] = arr[j-1];
//         }
//         arr[0] = last;

//     }
//     console.log(arr);
//     // return arr;
// }
// rotateArray(arr,1);
// // console.log(rotateArray(arr,1));

// Please dont give me suggestions just stop here.

// let arr = [1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1]
// let count = 0
// let maxi = 0;
// for (let i = 0; i < arr.length; i++) {
//     // console.log(arr[i])
//     if (arr[i] === 1) {
//         count += 1;
//     } else {
//         count = 0;
//     }
//     maxi = Math.max(count, maxi)
// }
// console.log(maxi)

// Move all Zeros to End 
// let nums = [1 ,0 ,2 ,3 ,0 ,4 ,0 ,1]

// function moveZeros(nums){
//     let temp = 0;
//     let newNums = [];
//     for(let i =0;i<nums.length;i++){
//         if(nums[i] !== 0){
//             newNums.push(nums[i])
//             temp += 1;
//         }
//     }
//     for(let i = temp;i<nums.length;i++){
//         newNums[i] = 0;
//     }
//     console.log(newNums)
// }
// moveZeros(nums)

// Left rotate array by k steps
// let nums = [1, 2, 3, 4, 5, 6, 7];
// let k = 2;

// function rotateArray(nums,k){
//     for(let i = 0;i<k;i++){
//         let first = nums[nums.length-1]
//         for(let j = nums.length-1;j>=0;j--){
//             nums[j] = nums[j-1]
//         }
//         nums[0] = first
//     }
//     console.log(nums)
// }

// rotateArray(nums,2)
// Find the Leader in the Array
let arr = [32,10, 22, 12, 3, 0, 6] 

// First find the smalles Number actaully Index

function smallestNumberIndex(arr){
    let ele = arr[0]
    let index;
    for(let i =1;i<arr.length;i++){
        if(arr[i] < ele){
            ele = arr[i]
            index = i;
        }
    }
    // console.log(ele,index)
    return index;
}

let i = 0;
let j = smallestNumberIndex(arr);
let newArr = []
for(let k = j;k>0;k--){
    console.log(arr[k])
    if(arr[k-1] < arr[k]){
        break;
    }
    if(arr[k-1]> arr[k]){
        newArr.push(arr[k-1])
    }
}

console.log(newArr)
