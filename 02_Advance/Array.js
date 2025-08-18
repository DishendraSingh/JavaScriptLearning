const numbers = [1, 2, 3, 4, 5];
const fruits = ['apple', 'banana', 'orange'];

// Push example: add 'grape' to the end
fruits.push('grape');
console.log(fruits);
// Pop example: remove the last element
const removedFruit = fruits.pop();
console.log('Removed fruit:', removedFruit);
const mixed = [42, 'hello', true, null];

console.log(numbers); // [1, 2, 3, 4, 5]
console.log(fruits);  // ['apple', 'banana', 'orange']
console.log(mixed);   // [42, 'hello', true, null]
// Slice example: get elements from index 1 to 3 (not including 3)
const slicedNumbers = numbers.slice(1, 3);
console.log('Sliced numbers:', slicedNumbers); // [2, 3]

// Splice example: remove 2 elements from index 1 and insert 'kiwi', 'mango'
const splicedFruits = fruits.splice(1, 2, 'kiwi', 'mango');
console.log('Spliced fruits:', splicedFruits); // ['banana', 'orange']
console.log('Updated fruits:', fruits); // ['apple', 'kiwi', 'mango']