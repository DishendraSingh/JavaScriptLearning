

class User{

    constructor(Username)
    {
     this.Username=Username
    }
    logMe()
    {
    console.log(`UserName is  ${this.Username}`)
    }
    static CreatId()
    {
        return '123';
    }
}

class Teacher extends User

{
    constructor(Username,email,password){
        super(Username),
        this.email=email,
        this.password=password
    }

    addCourse(){
        console.log(`New couser has been Added to this user ${this.Username}`)
    }
}

const tech= new Teacher("Dish","dis@d.com","1236")
const usern= new User('Dish')
//console.log(usern.CreatId()) statci key is used in this method ,which is not provinding acces to usee this method
console.log(tech)

//console.log(tech.logMe().CreatId()) even i m using inheritated class but , it's resisting, so statc key word use to restrit
console.log;(tech.addCourse())

console.log(tech instanceof Teacher)
