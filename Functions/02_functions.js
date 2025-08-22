function calculateSum(...a) {
    return a;
}
console.log(calculateSum(1, 2, 3, 4, 5)); // [1, 2, 3, 4, 5] rest operator (...a)

function calculateSum1(v1,v3,...a) {
    return a;

}
console.log(calculateSum1(11, 2, 3, 4, 5)); // [1, 2, 3, 4, 5] rest operator (...a)

const users = {
    username: "John",
    userage: 30,
    usercity: "New York"
    
}


function handleObject(users) {
   console.log(`Name: ${users.username}, Age: ${users.userage}, City: ${users.usercity}`); // Name: John, Age: 30, City: New York


}

//handleObject(users); // Name: John, Age: 30, City: New York
handleObject({
    username: "Jane",
    userage: 25,
    usercity: "Los Angeles"
});


const myarray = [1, 2, 3, 4, 5];
function handleArray([first, second, ...rest]) {
    console.log(`First: ${first}, Second: ${second}, Rest: ${rest}`); // First: 1, Second: 2, Rest: [3, 4, 5]
}
//handleArray(myarray); // First: 1, Second: 2, Rest: [3, 4, 5]
handleArray([10, 20, 30, 40, 50]); // First