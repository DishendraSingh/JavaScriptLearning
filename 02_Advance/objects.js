const JsUser={
    name:"John Doe",
    age: 30,        
    isActive: true,
    hobbies: ["reading", "gaming", "coding"],
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "USA"
    },
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    },
    "getDetails": function() {
        return `${this.name}, Age: ${this.age}, Active: ${this.isActive}`;
    }
}
//console.log(JsUser.getDetails); // John Doe
console.log(JsUser["getDetails"]()); // John Doe, Age: 30, Active: true
console.log(JsUser.greet()); // Hello, my name is John Doe
console.log(JsUser); // Anytown
JsUser.age = 31; // Update ag
Object.freeze(JsUser); // Prevent further modifications
JsUser.age = 45; // This will not change the age due to freeze
console.log(JsUser.age); // 31