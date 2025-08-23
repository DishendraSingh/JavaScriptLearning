const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//--------------------------------------------------- normal function
const sum = array.reduce(function(accumulator, currentValue) { return accumulator + currentValue}, 0);
console.log(sum); // Output: 45

//--------------------------------------------------- arrow function
const sum1 = array.reduce((accumulator, currentValue) => {
    console.log(`Accumulator: ${accumulator}, Current Value: ${currentValue}`);
    return (accumulator + currentValue)}, 0);
console.log(sum1); // Output: 45


//--------------------------------------------------- arrow function with implicit return
const product = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(product); // Output: 362880


