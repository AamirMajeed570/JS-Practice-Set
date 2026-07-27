let nums = [9, -3, 3, -1, 6, -5]
// Length of the longest subarray with sum is equal to 0
let res = nums[0];

let startindex = 0;
let endindex = 0;

let subarray = []

for(let i = 0;i<nums.length;i++){
    let currsum = 0;

    for(let j = i;j<nums.length;j++){
        currsum += nums[j];

        if(currsum > res){
            res = currsum;
        }

        if(res === 0){
            startindex = i;
            endindex = j;
        }
    }
}

for(let i = startindex;i<=endindex;i++){
    subarray.push(nums[i])
}

console.log(subarray)