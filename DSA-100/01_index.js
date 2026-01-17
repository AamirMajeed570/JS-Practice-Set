// 1. Two Sum
let nums = [2,7,11,15]
let target = 26;

function calculateTarget(nums){
    let index = 0;
    for(let i = 0;i<nums.length;i++){
        console.log(nums[i]+nums[i+1],i)
        if(nums[i]+nums[i+1] === target){
            index = i;
        }else{
            // return;
        }
    }

    return [nums[index],nums[index+1]]
}

const res = calculateTarget(nums)
if(res === undefined){
    console.log("No Element found for the target")
}else {
    console.log(res)
}