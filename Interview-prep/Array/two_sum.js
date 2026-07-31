let arr = [2,6,5,8,11];
let target = 14;

function twoSum(arr,target){
    for(let i = 0;i<arr.length;i++){
        for(let j = i+1;j<arr.length;j++){
            if(arr[i]+arr[j] === target){
                return "YES"
            }
        }
    }
    return "NO"
}

console.log(twoSum(arr,target))

// Three Sum
// let nums = [-1,0,1,2,-1,-4];
// let st = new Set()
// let target 
// for(let i = 0;i<nums.length;i++){
//     for(let j = i+1;j<nums.length;j++){
//         for(let k = j+1;k<nums.length;k++){
//             if(nums[i]+nums[j]+nums[k] === 0){
//                 let temp = [nums[i],nums[j],nums[k]].sort((a,b)=>a-b)
//                 st.add(JSON.stringify(temp))
//             }
//         }
//     }
// }
// console.log(st)
// let ans = Array.from(st).map((str)=>JSON.parse(str))
// console.log(ans)

// Four Sum

let nums = [1,0,-1,0,-2,2]
let target = 0;

function fourSum(nums,target){
    let st = new Set();
    for(let i = 0;i<nums.length;i++){
        for(let j = i+1;j<nums.length;j++){
            for(let k = j+1;k<nums.length;k++){
                for(let l = k+1;l<nums.length;l++){
                    if(nums[i]+nums[j]+nums[k]+nums[l] === target){
                        let temp = [nums[i],nums[j],nums[k],nums[l]]
                        st.add(temp);
                    }
                }
            }
        }
    }
    return st;
}

console.log(fourSum(nums,target))