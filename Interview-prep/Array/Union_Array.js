let arr1 = [1,2,3,4,5]
let arr2 = [2,3,4,4,5]

// Output: {1,2,3,4,5}

let newArray = []

let m = arr1.length;
let n = arr2.length;

let i = 0, j = 0;

while( i < m && j < n){
    
    if(!newArray.includes(arr1[i])){
        newArray.push(arr1[i])
    }
    if(!newArray.includes(arr2[i])){
            newArray.push(arr2[i])
        }


    i++;
    j++;
}

console.log(newArray)
