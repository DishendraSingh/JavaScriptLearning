class User{

    constructor(email, passwprd)
    {
        this.passwprd=passwprd,
        this.email=email
    }

    get email(){

        return this._email.toUpperCase()
    }
    set email(values){
        this._email=values
    }
    
    
    get passwprd(){

        return `${this._password.toUpperCase()}Dish`
    }
    set passwprd(values){
        this._password=values
    }

}

const di=new User("dish","d@d.com")
console.log(di.passwprd);