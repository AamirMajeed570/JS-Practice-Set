let arr = [1,1,2,2,2,3,3];
// let newArr = new Set(arr)

function removeDuplicates(arr){
    let newArr = [];
    for(let i = 0;i<arr.length;i++){
        if(!newArr.includes(arr[i])){
            newArr.push(arr[i])
        }
    }

    return newArr
}


console.log(removeDuplicates(arr))