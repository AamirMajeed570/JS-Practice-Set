const user = {
    username:"aamir majeed",
    status:"log in",
    password:"123456"
}

for (const key in user) {
    // console.log(`${key} : ${user[key]}`);
}

// console.log(this) //{}

function User(username,password,status){
    this.username = username;
    this.password = password;
    this.status = status;
}
const userOne = new User("Aamir Majeed","123456","Log out")
console.log(userOne);

// new keyword in JS
// step 1: New instance of an Object will be created
// step 2: Constructor will get Called
// The new keyword in JavaScript is used to create an instance of a user-defined object type or a built-in object type