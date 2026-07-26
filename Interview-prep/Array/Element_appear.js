let arr =  [2,2,1]

let obj = {}

for(let i in arr){
    const ele = arr[i]

    if(obj[ele]){
        obj[ele] += 1;
    }else{
        obj[ele] = 1;
    }
}

console.log(obj)

for(let i in obj){
    // console.log(i,obj[i])
    if(obj[i] === 1){
        console.log(i)
    }
}