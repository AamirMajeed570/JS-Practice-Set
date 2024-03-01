// function sayHello(username) {
//         return `Hey! How are You . ${username} `
// }

// sayHello("aamir");
// console.log(sayHello("aamir"));

// Objects
const obj = {
    name:"Aamir Majeed Khan",
    role:"SDE"
}

let focus = function greet(myobj){
    console.log(`The name of a user is ${myobj.name} with specified role of ${myobj.role}`)
}
console.log(focus(obj))
// greet(obj)

function hypotnuse(b,p) {

    function square(x){
        return x * x
    }
   return Math.sqrt(square(b)+square(p));
    
}

let base = 3;
let perpendicular = 4;
let hyp = hypotnuse(base,perpendicular)
// console.log(hyp);