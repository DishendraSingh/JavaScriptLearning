const User={
    username:"Dishendra Singh",
    logging:true,
    loginCount:10,

    getUserDetail:function(){
        console.log(`Got User Detail from DataBase ${User.username}`)
        console.log(this);
    }
}

function Userfunc(username,logincount,isLoggedIn){
    this.username=username,
    this.logincount=logincount,
    this.isLoggedIn=isLoggedIn

    return this;
}

let userdetail=new Userfunc("dish",5,true)
let userdetail1= new Userfunc("dish1",5,false)
console.log(userdetail);
console.log(userdetail1);

//console.log(User.username);
//console.log(User.getUserDetail());