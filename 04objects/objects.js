const obj = {
    username:"Aamir Majeed Khan",
    email:"aamirmajeedkhan570@gmail.com",
    location:"J&K",
    district:"Baramulla",
    role:"Software Engineering",
    greetings : function (username){
            console.log(`Hello ${this.username}`);
    }
}

console.log(obj)
obj.greetings();
// console.log(obj.greetings())
