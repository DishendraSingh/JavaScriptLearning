// this old patter where we were create the object and then inheirt the other object proprty


const User={
    username:"Dishendra",
    emailid:"dishendra@gmail.com"
}

const softwareEngineer={
    developer :"Dotnet C# Developer"

}

const TeamHandling={
    teamManage :5
}
const Support ={

    supportwork :"No",
    __proto__:softwareEngineer
  //  __proto__:User
}
User.__proto__=softwareEngineer

console.log(User.developer)


console.log(`${User.username} is a ${User.developer} , Does rovide support ? ${Support.supportwork}`  )


// Moern Syntex


const Newusername ="Dhishendra     Singh  ";

String.prototype.trueLenth=function(){

    console.log(`${this}   `)
    console.log(`the ture ${this.trim().length}`)
}

"Dishendra   ".trueLenth();
Newusername.trueLenth()