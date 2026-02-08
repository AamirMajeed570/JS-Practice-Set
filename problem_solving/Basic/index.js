// Check Even or Odd

// let num = 11;

// function checkEvenOdd(num){
//     if(num % 2 === 0){
//         return 1;
//     }
//     return 0;
// }

// if(checkEvenOdd(num)){
//     console.log("number is Even")
// }else{
//     console.log("Number is Odd")
// }

// Multiplication Table
// let num = 5;

// function multiplication(num){
//     for(let i = 1;i<=10;i++){
//         console.log(`${num} * ${i} = ${num*i}`)
//     }
// }

// multiplication(num)
// Sum of naturals

// let n = 5;
// function sumOfNaturalNumbers(n){
//     return (n*(n+1))/2
// }

// console.log(sumOfNaturalNumbers(n))

// Sum of Squares of Natural Numbers

// let n = 3;

// function sumOfSquares(n){
//     return (n*(n+1)*(2*(n+1)))/6
// }
// console.log(sumOfSquares(n))

// Swap two Numbers
// let a = 10
// let b = 20

// function swap(a,b){
//     let temp = a;
//     a = b;
//     b = temp;

//     return [a,b]
// }

// const [m,n] = swap(a,b)
// console.log('Swap of Number is ',m,n)

// Find the Closet
// let n = 13;
// let m = 4;

// function findClosest(m,n){
//     for(let i = n;i>0;i--){
//         if(i%m === 0){
//             return i;
//         }
//     }
// }

// console.log("Closest Number is",findClosest(m,n))

// Dice problem
//  1-6,2-4,3-4

// let face = 2;

// function findOpposite(face){
//     let ans;
//     if(face === 1){
//         ans = 6
//     }else if(face === 2){
//         ans = 5
//     }else if(face === 3){
//         ans = 4
//     }else if(face === 4){
//         ans = 6
//     }else if(face === 5){
//         ans = 2;
//     }else{
//         ans = 1;
//     }

//     return ans;
// }

// console.log("Opposite Value is ",findOpposite(face))
// Square Root of a Number

let num = 25;

function findSquare(num){
    let res = 1;

    while(res*res <= num){
        res++;
    }

    return res-1;
}

console.log("Square Root of a Number is",findSquare(num))
