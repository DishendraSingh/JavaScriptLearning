const score = 1000;
const bonus = new Number(50);

console.log(bonus); // 1050
console.log(score); // 1050

console.log(typeof bonus); // object
console.log(score.toString().length); // number
console.log(bonus.toFixed(2)); // "50"2
const total = 100000000;
console.log(total.toLocaleString()); // "100,000"
console.log(total.toLocaleString('en-US')); // "100,000"

console.log(Math.random());
console.log(Math.floor(Math.random() * 100)); // Random number between 0 and 99
console.log(Math.ceil(Math.random() * 100)); // Random number between 1 and 100 
console.log(Math.round(Math.random() * 100)); // Random number between 0 and 100
console.log(Math.max(10, 20, 30)); // 30
console.log(Math.min(10, 20, 30)); // 10 
const min = 10;
const max = 20;
console.log(Math.floor(Math.random()* (max - min + 1))+ min); // Random number between 10 and 20
console.log(Math.pow(2, 3)); // 8