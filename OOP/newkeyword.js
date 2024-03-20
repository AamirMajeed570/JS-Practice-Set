// Everything in JS is Object
// Function is also an Object in JS
function createUser(username,score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function(){
    return score++;
}

createUser.prototype.printMe = function(){
    console.log(`Username is ${this.username} contains score ${this.score}`)
}

const user = new createUser("aamir",10);
user.printMe();
