class User {
    constructor(email, password){
        this.email =email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    get password(){
        return `${this._password}saad`
    }

    set password(value){
        this._password = value.toUpperCase()
    }
}

const saad = new User("s@saad.ai", "abc")

console.log(saad.email);
console.log(saad.password);
