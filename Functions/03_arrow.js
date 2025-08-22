{
const name = "Dishendra singh";
const user={

    name: "John Doe",
    age: 30,
    welcome: function() {
        console.log(`Welcome ${this.name}`);
    }
}
user.welcome(); // Output: Welcome John Doe

console.log(name); // Output: John Doe
}
//-----------------------------Arrow function-----------------------------

const greet = () => {
    console.log("Hello, World!");
}
greet(); // Output: Hello, World!

const square = (x) =>

    { 
        return x * x

    }
    square(4); // Output: 16
console.log(square(4)); // Output: 16
const add = (a, b) => a + b;
console.log(add(5, 3)); // Output: 8
const returnObject = () => ({ name: "Alice", age: 25 });
console.log(returnObject()); // Output: { name: 'Alice', age: 25 }