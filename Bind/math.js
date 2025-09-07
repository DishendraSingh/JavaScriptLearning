
const descriptor=Object.getOwnPropertyDescriptor(Math,"PI");
// console.log(descriptor)

// Math.PI=5
// console.log(Math.PI)

//PI is can not be override, now we declaring our object and check can we creeate this constant unchangable value

const chai={
    name:"Green Tea",
    price:250,//
    isAvailable : true,

    getChai:function(){

        console.log("Chai is not Ready")
    }
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"))
//console.log(chai)

const chaidesc = Object.defineProperty(chai,'name',{
    writable:false,
    enumerable:false
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"))


// mainly use of this to create out property wherer we want restric override


for(let [key,value] of Object.entries(chai))
{
    if(typeof value!== 'function')
        {
        console.log(`${key}: ${value}`)}


 
}