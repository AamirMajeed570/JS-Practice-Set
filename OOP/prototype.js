let myName = "aamir   ";

// console.log(myName.trueLength)

// function trueLength(name){
//     return name.trim().length;
// }

Object.prototype.trueLenght = function(){
    console.log(`True Length is ${this.trim().length}`)
}

myName.trueLenght();
"aamirmajeedkhan".trueLenght();