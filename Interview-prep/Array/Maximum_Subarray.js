let nums = [2,3,5,-2,7,-4]

// let res = nums[0];

// for(let i = 0;i<nums.length;i++){
//     let currsum = 0;
//     for (let j = i; j < nums.length; j++) {
        
//         currsum += nums[j];
//         res = Math.max(res,currsum)
        
//     }
// }

// console.log(res)

// Find the Subarray

let startIndex = 0;
let endIndex = 0;
let res = nums[0];
let subarray = []
for(let i = 0;i<nums.length;i++){
    let currsum = 0;
    for(let j = i;j<nums.length;j++){
        currsum += nums[j];
        if( currsum > res){
            startIndex = i;
            endIndex = j;
            res = currsum;
        }
    }
}

for(let i = startIndex;i<=endIndex;i++){
    subarray.push(nums[i])
}

console.log(subarray)