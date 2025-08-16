let name   = "John";
let greeting = `Hello, ${name}!`;
let age = 30;
let message = `My name is ${name} and I am ${age} years old.`

console.log(greeting);
console.log(message);

const multilineString = `This is a string`;
console.log(multilineString[0]); // Output: T
console.log(multilineString[1]); // Output: h
console.log(multilineString.__proto__); // Output: i
console.log(multilineString.length); // Output: 20
console.log(multilineString.charAt(0)); // Output: T   
console.log(multilineString.toUpperCase()); // Output: 
console.log(multilineString.toLowerCase()); // Output: this is a string
console.log(multilineString.indexOf("is")); // Output: 2
let str = multilineString.replace("is", "was");
console.log(str); // Output: Thwas a string
console.log(multilineString.slice(0, 4)); // Output: This
console.log(multilineString.substring(0, 4)); // Output: This
console.log(multilineString.split(" ")); // Output: [ 'This', 'is', 'a', 'string' ]
console.log(multilineString.trim()); // Output: This is a string