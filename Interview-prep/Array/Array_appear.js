let nums = [4,1,2,1,2];

let obj = {}

for(let ele in nums){
    const element = nums[ele];
    console.log(element)
    if(obj[element]){
        obj[element] += 1;
    }else{
        obj[element] = 1;
    }
}

console.log(obj)

for(let key in obj){
    console.log(obj[key],key)
    if(obj[key] === 1){
        console.log(key)
    }
}