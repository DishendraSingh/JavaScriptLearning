

const PromiseON = new Promise(function(resolve,reject){

    setTimeout(() => {
        console.log("Async Task complete")
        resolve()
    }, 1000);
})
PromiseON.then(function(){

    //console.log("Prmise is consumed")
})


//-------------------------------Start---------------------------------
new Promise(function(resolve,reject){
setTimeout(() => {
   //  console.log('Async Method 2')
},
resolve()
,1000);
}).then(function(){
    //console.log('Promise 2 consumed')
}

)
//------------------------end----------------------------------------
//-----------------------start--------------------------------------
const PromiseThree= new Promise(function(resolve,reject)
{
 setTimeout(function(){
    resolve({"username":"dishendrasingh","email":"dishendra@gmail.com"})

 },1000)
})
PromiseThree.then(function(user){
    //console.log(user);
})
//------------------------end-----------------------------------------
//------------------------start------------------------------------
const promiseFour= new Promise((resolve,reject)=>{

    let error=false;
    setTimeout(() => {
        if(!error)
        {
            resolve({
                username:"dishendrasingh",email:"dishendrasingh@gmail.com"
            })
        }
        else
        {
            reject('Something went wrong , we are figuring out')
        }
    }, 1000);
})

promiseFour.then((user)=>{
    console.log(user)
    return user.username
}).then((username)=>{
    console.log(username)
}).catch((error)=>{
    console.log(error)
})
//-------------------------------------end------------------------------
//-------------------------------------start----------------------------
const promiseFive= new Promise((resolve,reject)=>{

    let error=true;
    setTimeout(() => {
        if(!error)
        {
            resolve({
                username:"dishendra ",email:"dishendra@gmail.com"
            })
        }
        else
        {
            reject('Something went wrong in JS file, we are figuring out')
        }
    }, 1000);
})

async function consumeFive(){
try
{
const constfive  =  await promiseFive;
console.log(constfive);
}
catch(error)
{
console.log(error);
}
}
consumeFive();

//----------------------------------------- start-------------------------------


// async function GetUser() {

//     let response = await fetch('https://api.github.com/users/DishendraSingh');
//     let data = await response.json();
//     console.log(data); 
    
// }
// GetUser();


/// by both way we are fetching API details

fetch('https://api.github.com/users/DishendraSingh').then((response)=>{

    return response.json()
}).then((userdata)=>{
    console.log(userdata)
}).catch((error)=>{
    console.log("Error",error)
})

//------------------------------End----------------------------