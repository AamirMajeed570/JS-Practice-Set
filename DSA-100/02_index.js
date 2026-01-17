// Buy and sell problem
// let arr = [7, 1, 4, 5, 0, 6]
// let temp = arr[0]
// let small_index = 0;
// for(let i =1;i<arr.length;i++){
//     if(temp > arr[i]){
//         small_index = i;
//         // break;
//     }
// }
// console.log(small_index)
// let newTemp = arr[small_index+1];
// let large_index = 0;
// for(let j = small_index;j<arr.length;j++){
//     if(arr[j] > newTemp){
//         large_index = j;
//         // break;
//     }
// }
// console.log(large_index)
// console.log(`Highest Profit will be at when i will buy the Item at ${small_index} and sell at ${large_index}`)

let arr = [7,1,4,3,5,2]

let max_profit = 0;

let small_ele = arr[0]
let buyIndex = 0;
let sellIndex = 0;

for(let i =1;i<arr.length;i++){

    if(small_ele > arr[i]){
        small_ele = arr[i]
        buyIndex = i;
    }

    let profit = arr[i] - small_ele;
    if(profit > max_profit){
        max_profit = profit;
        sellIndex = i;
    }
}
console.log(buyIndex,sellIndex)
console.log(`Maximum profit is ${arr[sellIndex] - arr[buyIndex]}`)