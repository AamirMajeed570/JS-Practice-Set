let arr = [1,2,3,4,5,6];
// console.log(arr);

const value = arr.reduce((accumalator,currentValue)=>{
    return accumalator + currentValue;
})
// console.log(`The Sum of Elements in array are ${value}`);

const res = arr.filter((val)=>{
    return val%2==0

})

// console.log(res)

let newArray = [];
arr.forEach((value)=>{
    if(value%2==0)
    {
        newArray.push(value)
    }
})
// console.log(newArray)
newArray.forEach((item)=>{
    // console.log(item);
})
// Method Chaining Technique
let square = arr.map((item)=>{
    return item * item
}).filter((val)=>{
    return val % 3==0
})
console.log(square)