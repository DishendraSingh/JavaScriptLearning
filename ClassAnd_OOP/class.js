
// ES6
// this is latest version of javaScript where we can use Class

class User{

    constructor(userName,Email,passwprd)
    {
        this.userName=userName,
        this.Email=Email,
        this.passwprd=passwprd
    }
     encryptPassword(){
        return (`${this.passwprd}abc`)
    }
    changeUserName()
    {
        return (`${this.userName.toUpperCase()}`)
    }
}

const chai= new  User("Dish","Dishendra","abcs")
console.log(chai.encryptPassword())
console.log(chai.changeUserName())


// Behind the Scene when class was not availble
// we did same task using protope and function
function CreateUser(userName,Email,passwprd)
    {
        this.userName=userName,
        this.Email=Email,
        this.passwprd=passwprd
    }
CreateUser.prototype.encryptPassword=function()
{
    return (`${this.passwprd}abbcss`)
}
CreateUser.prototype.changeUserName=function()
{
    return (`${this.userName.toUpperCase()}`)
}

const Tea= new  CreateUser("Dish","Dishendra","abcs")
console.log(Tea.encryptPassword())
console.log(Tea.changeUserName())