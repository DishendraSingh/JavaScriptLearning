function mutiple(num){

    return num*num;
}
mutiple.power=2;
console.log(mutiple.power)
console.log(mutiple(5))

function CreateUser(username,score){

    this.username=username,
    this.score=score
}

CreateUser.prototype.increament = function (){

    this.score ++;

}
CreateUser.prototype.printMe =function(){
console.log(`Price of the tea/chai ${this.score}`)
}
const chai= new CreateUser("dish",25)
const tea= new CreateUser("dishendra",250)
//console.log(chai);
chai.printMe();
tea.printMe()