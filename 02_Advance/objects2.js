//const { use } = require("react");

const user =new Object(); // Creating an object using Object constructor and Singleton pattern
const user2 = {}; // Creating an object using object literal syntax
user.name = "John"; // Adding a property to the object
user.age = 30; // Adding another property to the object 
user2.name = "Jane"; // Adding a property to the second object
user2.age = 25; // Adding another property to the second object 
user2.address = "123 Main St"; // Adding a new property to the second object

console.log(user2); // Output: { name: 'John', age: 30 }


const user3 = {
    "name": "Dish",
    "email": "dish@microsoft.com",
    "age": 30,
    "address": {
        "street": "123 Main St",
        "city": "Redmond",
        "state": "WA"
    },
    "isActive": true,
    "hobbies": ["reading", "gaming", "coding"],
    "fullName": {
        username:{ 
              name:"Dish",
             surname:  "Singh"
            }
    }
    // "greet": function() {
    //     console.log(`Hello, my name is ${this.name}`);
    // }
}
console.log(user3); // Output: { name: 'Dish', email: '

const object1 = {name1: "Object 1",email1: "email1@email.com"}
const object2 = {name2: "Object 2 ",email2: "email2@email.com"}
const object3 = {name3: "Object 3",email3: "email3@email.com"}
//const object4 = {object1, object2, object3}; // Merging objects using object literal syntax
//const object4 = Object.assign({}, object1, object2, object3); // Merging objects using Object.assign()
const object4 = { ...object1,...object2, ...object3}; // Merging objects using spread operator
//console.log(object4); // Output: { name: 'Object 1', email: '

console.log(Object.keys(user2)); // Output: [ 'name', 'email', 'age', 'address', 'isActive', 'hobbies', 'fullName' ]
console.log(Object.values(user2));
console.log(Object.entries(user2));
console.log((user2.hasOwnProperty("name"))); // Output: true
console.log((user2.hasOwnProperty("email"))); // Output: false