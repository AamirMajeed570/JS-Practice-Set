let nums = [1, 2, 1, 1, 3, 2, 2]

let obj = {}

for(let ele in nums){
    const element = nums[ele];

    if(obj[element]){
        obj[element] += 1;
    }else{
        obj[element] = 1;
    }
}
console.log(obj)
let n = nums.length;
let arr = [];
for(let key in obj){
    if(obj[key] >= 3){
        arr.push(key)
    }
}

console.log(arr)