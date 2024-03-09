// // Magical Hat Sorting
// let students = ["Aamir","Faisal Rasheed","Hanan Ras","Aamir Majeed khan","Mudasir Maqbool Lone"]

// function magicalSortingHat(students){
//     students.forEach(names => {
//         if(names.length < 6) {
//             console.log(`${names}: Gryffindor House`);
//         } else if(names.length < 8) {
//             console.log(`${names}: Hufflepuff House`);
//         } else if(names.length < 12) {
//             console.log(`${names}: Ravenclaw House`);
//         } else {
//             console.log(`${names}: Slytherin House`);
//         }
//     });
// }

// magicalSortingHat(students);

// Q.NO 2 Vowel Counter Function

// let name = 'aamir Majeed khan'
// let sum = 0

// function vowelCounter (name) {
//     name = name.toLowerCase();
//   for (let i = 0; i < name.length; i++) {
//     if (
//       name[i] === 'a' ||
//       name[i] === 'A' ||
//       name[i] === 'e' ||
//       name[i] === 'E' ||
//       name[i] === 'I' ||
//       name[i] === 'i' ||
//       name[i] === 'O' ||
//       name[i] === 'o' ||
//       name[i] === 'U' ||
//       name[i] === 'u'
//     ) {
//       sum++
//     }
//   }
//   return sum
// }
// console.log(`Number of vowels in a "${name}" is ${vowelCounter(name)}`);


// Q.No 3 Array 
// // let numbers = [1, 2, 3, 4, 5];

// let doubledNumbers = numbers.map((element) => {
//     return element * 2;
// });

// console.log(doubledNumbers);

// Q. No 4 Sum of Array Elements 

// let arr = new Array(6);
// arr[0]=10;
// arr[1]=20;
// arr[2]=30;
// arr[3]=40;
// arr[4]=50;
// arr[5]=-250;

// arr.forEach((data)=>{
//     // console.log(data);
// })

// function addNums(arr)
// {
//     let sum = 0;
//     for(let num of arr)
//     {
//         if(num<0)
//         {
//             break;
//         }
        
//             sum += num
//     }
//     return sum;
    
// }

// console.log(addNums(arr))

// Q Node. 5 PasswordValidator
// let string = "Aamir12343"
// const password = function passwordValidator(string){
//     if(string.length>8 && string.length < 12)
//     {
//         console.log("Strong Password");
//     }
//     else
//     {
//         console.log("Weak Password");
//     }
// }

// password(string);
