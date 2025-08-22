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