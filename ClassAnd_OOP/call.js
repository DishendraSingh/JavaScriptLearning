function setUserName(userName){
    //DB calls
    this.userName=userName;
    console.log(`called ${userName}`)
}

function UserLoginDetail(userName,Loggin ,password){
   setUserName.call(this,userName),
    this.Loggin=Loggin,
    this.password=password
}

const logged=new UserLoginDetail("Dishendra","dishendrasingh","12345")
console.log(logged);