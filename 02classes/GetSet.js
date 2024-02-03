class User {
    constructor(email,password)
    {
        this.password = password;
        this.email = email;
    }
    get password(){
        return this._password.toUpperCase();
    }
    set password(value){
        this._password = value;
    }
}

const newUser = new User("aamir@khan.com","abhcf");
console.log(newUser.password);