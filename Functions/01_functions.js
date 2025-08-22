function AddNumbers(a, b) {
    return a + b;
}
function SubtractNumbers(a, b) {
    return a - b;
}
function MultiplyNumbers(a, b) {

    return a * b;
}   
function DivideNumbers(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}
function ModulusNumbers(a, b) {
    return a % b;
}
const MathFunctions = AddNumbers(1, 2)
//+ SubtractNumbers(5, 3) + MultiplyNumbers(4, 2) + DivideNumbers(8, 2) + ModulusNumbers(10, 3);

console.log("Result of Math Functions: ", MathFunctions);


function loggedinUser(username) {
    if (!username) {
        console.log("Username is required");
    }
    return `User is logged in as ${username}`;
}

//console.log(loggedinUser("JohnDoe"));
console.log(loggedinUser());