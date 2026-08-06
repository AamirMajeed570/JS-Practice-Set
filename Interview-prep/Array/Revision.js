// Maximum Sum Subarray

// let nums = [2, 3, 5, -2, 7, -4];

// let res = nums[0];

// for(let i = 0;i<nums.length;i++){
//     let currSum = 0;
//     for(let j=i;j<nums.length;j++){
//         currSum += nums[j];
//         res = Math.max(res,currSum);
//     }
// }

// console.log(res)

// Print the Maximum Sum Subarray
// let nums = [-2, -3, -7, -2, -10, -4] 

// let startIndex = 0;
// let endIndex = 0;
// let res = nums[0];
// let subarray = [];

// for(let i = 0;i<nums.length;i++){
//     let currSum = 0;
//     for(let j = 0;j<nums.length;j++){
//         currSum += nums[j];

//         if(currSum > res){
//             startIndex = i;
//             endIndex = j;
//             res = currSum;
//         }
//     }

// }

// for(let i = startIndex;i<=endIndex;i++){
//     subarray.push(nums[i]);
// }
// console.log(subarray);

// Longest Subarray with given Sum K(Positives)
// let nums = [-3, 2, 1];
// let target = 6;
// let maxLength = 0;
// for(let i = 0;i<nums.length;i++){
//     let sum = 0;
//     for(let j = i;j<nums.length;j++){
//         sum += nums[j];

//         if( sum === target){
//             let length = j - i + 1;
//             maxLength = Math.max(maxLength,length)
//         }
//     }
// }
// console.log(maxLength)

// Maximum Product Subarray

// let nums = [1,2,3,4,5,0];

// let res = nums[0];

// for(let i = 0;i<nums.length;i++){
//     let currProduct = 1;
//     for(let j = i;j<nums.length;j++){
//         currProduct *= nums[j];
//         res = Math.max(res,currProduct);
//     }
// }
// console.log(res);

// Print the Maximum Product Subarray
// let nums = [1,2,-3,0,-4,-5];
// let startIndex = 0;
// let endIndex = 0;
// let res = nums[0];
// let subarray = [];

// for(let i = 0;i<nums.length;i++){
//     let currProduct = 1;
//     for(let j = i;j<nums.length;j++){
//         currProduct *= nums[j];
//         if(currProduct > res){
//             startIndex = i;
//             endIndex = j;
//             res = currProduct;
//         }
//     }
// }

// for(let i = startIndex;i<=endIndex;i++){
//     subarray.push(nums[i]);
// }

// console.log(subarray);

// Count Subarrays with Sum K

// let nums = [3, 1, 2, 4];
// let target = 6;

// let count = 0;
// let res = nums[0];

// for (let i = 0; i < nums.length; i++) {
//     for (let j = i; j < nums.length; j++) {
//         let sum = 0;
//         for (let k = i; k <= j; k++) {
//             sum += nums[k];
//         }

//         if (sum === target) {
//             count++;
//         }
//     }


// }
// console.log(count);

// Length of the longest subarray with zero Sum
// let nums = [9, -3, 3, -1, 6, -5];

// let count = 0;
// let maxLength = 0;

// for(let i = 0;i<nums.length;i++){
//     let sum = 0;
//     for(let j = i;j<nums.length;j++){
//         sum += nums[j];
//         console.log("j----",j,"i----",i)
//         if( sum === 0){
//             let length = j - i + 1;
//             maxLength = Math.max(maxLength,length)
//         }
//     }
// }

// console.log(maxLength)

// Leaders in an Array
// let nums = [4, 7, 1, 0];

// let leaders = [];

// for(let i = 0;i<nums.length;i++){
//     let isLeader = true;
//     for(let j = i+1;j<nums.length;j++){
//         if(nums[j] > nums[i]){
//             isLeader = false;
//             break;
//         }
//     }
//     if(isLeader){
//         leaders.push(nums[i])
//     }
// }

// console.log(leaders);

// Find the Majority Element that occurs more than N/2 times

// let arr = [1, 1, 1, 2, 1, 2] 

// let obj = {}

// for(let ele in arr){
//     const element = arr[ele];
//     console.log("element----",element)
//     if(obj[element]){
//         obj[element] += 1;
//     }else{
//         obj[element] = 1;
//     }
// }

// console.log(obj)
// for(let key in obj){
//     console.log("key----",key,obj[key])
//     if(obj[key] > arr.length/2){
//         console.log("Majority Element is",key)
//     }
// }


// *****************************String Problems********************************
// Remove Outermost Parentheses

// let str = "((()))"
// let levelCounter = 0;
// let res = "";

// function removeOuterParentheses(str) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === '(') {
//             if (levelCounter > 0) {
//                 res += str[i];
//             } 
//             levelCounter++;
//         }else if (str[i] === ')'){
//             levelCounter--;
//             if(levelCounter > 0){
//                 res += str[i];
//             }
//         }
//     }
//     return res;
// }

// console.log(removeOuterParentheses(str))

// Palindrome Check

// let str = "madam"

// let flag = true;
// let i,j;

// for(i = 0,j = str.length-1;i<str.length/2;i++,j--){
//     if(str[i] !== str[j]){
//         flag = false;
//     }
// }

// console.log(flag ? "Palindrome" : "Not Palindrome");

// let str = "0214638"
// if(str[0] === '0')
//     str = str.slice(1,str.length)
// console.log(str)
// function findLargestOddNumber(str){
//     for(let i = str.length-1;i>=0;i--){
//         if(Number(str[i]) % 2 !== 0){
//             return str.slice(0,i+1);
//         }
//     }
//     return "";
// }

// console.log(findLargestOddNumber(str))

// Rotate String

// let str = "rotation";
// let goal = "tionrota";

// function checkRotation(str,goal){
//     if(str.length !== goal.length){
//         return false;
//     }

//     for(let i = 0;i<str.length;i++){
//         let rotated = str.substring(i) + str.substring(0,i);

//         if(rotated === goal){
//             return true;
//         }
//     }
//     return false;
// }

// console.log(checkRotation(str,goal) ? true : false)

// Anagram Check

// let str1 = "silent";
// let str2 = "listen";

// str1 = str1.split("").sort().join("");
// str2 = str2.split("").sort().join("");

// function checkAnagram(str1, str2) {
//     if (str1.length !== str2.length) {
//         return false;
//     } else if (str1 === str2) {
//         return true
//     }

//     return false;
// }

// console.log(checkAnagram(str1,str2) ? "Anagram": "Not Anagram")

let str = "raaaajj"

let obj = {}

for(let char in str){
    const ele = str[char]
    console.log(ele)
    if(obj[ele]){
        obj[ele] += 1;
    }else{
        obj[ele] = 1
    }
}

console.log(obj)
console.log(Object.keys(obj).sort())