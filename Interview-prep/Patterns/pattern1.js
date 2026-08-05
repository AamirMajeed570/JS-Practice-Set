// for(let i = 0;i<5;i++){
//     let row = ""
//     for(let j = 0;j<5;j++){
//         row += " * "
//     }
//     console.log(row)
// }
//  *  *  *  *  * 
//  *  *  *  *  * 
//  *  *  *  *  * 
//  *  *  *  *  * 
//  *  *  *  *  * 

// for(let i = 0;i<5;i++){
//     let row = "";
//     for(let j = 0;j<i;j++){
//         row += " * "
//     }
//     console.log(row)
// }

//  * 
//  *  * 
//  *  *  * 
//  *  *  *  * 
// console.log("1")
// for(let i = 1;i<=5;i++){
//     let row = "";
//     for(let j = 1;j<=i;j++){
//         row += j;
//     }
//     console.log(row)
// }
// 1
// 12
// 123
// 1234
// 12345

// for(let i = 1;i<=5;i++){
//     let row = "";
//     for(let j = 1;j<=i;j++){
//         row += i;
//     }
//     console.log(row)
// }
// 1
// 22
// 333
// 4444
// 55555

// for(let i = 0;i<5;i++){
//     let row = "";
//     for(let j = 5;j>i;j--){
//         row += " * "
//     }
//     console.log(row)
// }


// *  *  *  *  * 
//  *  *  *  * 
//  *  *  * 
//  *  * 
//  * 

// for(let i = 0;i<5;i++){
//     let row = "";
//     for(let j = 5;j>i;j--){
//         row += (5 - j + 1) + " ";
//     }
//     console.log(row)
// }

// 1 2 3 4 5 
// 1 2 3 4 
// 1 2 3 
// 1 2 
// 1 

// for(let i = 0;i<5;i++){
//     let row = "";
//     for(let j = 0;j<(5-i+1);j++){
//         row += " ";
//     }
//     // console.log(row);
//     for(let j = 0;j<(2*i+1);j++){
//         row += "*";
//     }
//     for(let j = 0;j<(5-i+1);j++){
//         row += " ";
//     }
//     console.log(row);
// }
//       *      
//      ***     
//     *****    
//    *******   
//   ********* 
// console.log("2")
// for(let i = 0;i<5;i++){
//     let row = "";
//     for(let j = 0;j<i;j++){
//         row += " ";
//     }

//     for(let j = 0;j<2*5-(2*i+1);j++){
//         row += "*";
//     }

//     for(let j = 0;j<i;j++){
//         row += " ";
//     }
//     console.log(row);
// }
// function printPyramid() {
//     for (let i = 0; i < 5; i++) {
//         let row = "";

//         for (let j = 0; j < 5 - i - 1; j++) {
//             row += " ";
//         }

//         for (let j = 0; j < 2 * i + 1; j++) {
//             row += "*";
//         }

//         console.log(row);
//     }
// }

// function printReversePyramid() {
//     for (let i = 1; i < 5; i++) {
//         let row = "";

//         for (let j = 0; j < i; j++) {
//             row += " ";
//         }

//         for (let j = 0; j < 2 * 5 - (2 * i + 1); j++) {
//             row += "*";
//         }

//         console.log(row);
//     }
// }

// printPyramid();
// printReversePyramid();



// let num = 1;

// for(let i = 0;i<5;i++){
//     let row = "";
//     for(let j =0;j<i;j++){
//         row += num + " ";
//         num++;
//     }
//     console.log(row)
// }

// 1 
// 2 3 
// 4 5 6 
// 7 8 9 10

for(let i = 0;i<5;i++){
    let row = "";
    for(let j = 0;j<=i;j++){
        row += String.fromCharCode(65+j) + " ";
    }
    console.log(row)
}
// A
// A B
// A B C
// A B C D
// A B C D E

for(let i = 0;i<5;i++){
    let row = "";
    for(let j = 5;j>i;j--){
        row += String.fromCharCode(70-j) + " ";
    }
    console.log(row)
}