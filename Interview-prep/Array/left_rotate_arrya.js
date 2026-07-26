// let arr = [1,2,3,4,5]
// // Output: [2,3,4,5,1]

// let firstEle = arr[0]

// for(let i = 0;i<arr.length;i++){
//     arr[i] = arr[i+1];
// }

// arr[arr.length-1] = firstEle;

// console.log(arr)

// Rotate array by k elements either right or left

let arr = [1, 2, 3, 4, 5, 6, 7];
let k = 4;

function rotateArray(arr, k) {
    for (let r = 0; r < k; r++) {
        let firstEle = arr[0];
        for (let i = 0; i < arr.length-1; i++) {
            arr[i] = arr[i + 1]
        }
        arr[arr.length-1] = firstEle;
    }

    return arr;
}

console.log(rotateArray(arr,k))