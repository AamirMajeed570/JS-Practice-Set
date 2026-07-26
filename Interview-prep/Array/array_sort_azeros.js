let arr = [1, 0, 2, 1, 0]

let c0 = 0;
let c1 = 0;
let c2 = 0;

for(let i = 0;i<arr.length;i++){
    if(arr[i] === 0){
        c0 += 1;
    }else if(arr[i] === 1){
        c1 += 1;
    }else if(arr[i] === 2){
        c2 += 1;
    }
}

console.log(c0,c1,c2)

let newArr = []


for(let i = 0;i<c0;i++){
    newArr.push(0)
}
// console.log("indexx-----",i)
for(let i = 0;i<c1;i++){
    newArr.push(1);
}
// console.log("indexx-----",i)
for(let i = 0;i<c2;i++){
    newArr.push(2)
}

console.log(newArr)