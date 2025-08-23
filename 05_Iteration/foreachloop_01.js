// const array=["java","ruby","CPP","swift","python"]

// const arr=array.forEach ((array) => 
// {
//     console.log(array)
//     return array  // forEach always returns undefined
// })
// console.log(arr)    

const arr2=[1,2,3,4,5,6,7,8,9,10]
const returnedValue=arr2.filter((num) => num%2===0 && num>5) // filter returns a new array
console.log(returnedValue)

// const returnedValue1= arr2.filter((num) => {num>5}) // fileter will return empty array because with curly braces we need to use return statement
// console.log(returnedValue1)

const returnedValue1= arr2.filter((num) => { return num>5}) // fileter will return empty array because with curly braces we need to use return statement
console.log(returnedValue1)

///  by using forEach we can achieve the same result as filter , but we need to create an empty array and push the values in it
const myArray=[];

arr2.forEach((num) => {
    if(num%2===0 && num>5){
        myArray.push(num)
    }
})
console.log(myArray)