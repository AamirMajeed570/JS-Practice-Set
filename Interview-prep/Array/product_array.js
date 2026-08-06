let nums = [1, 2, 3, 4]

let res = new Array(4).fill(1);

for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
        if( i!== j){
            res[i] *= nums[j];
        }
    }
}

console.log(res)
