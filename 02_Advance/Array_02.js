const marvel = ["Iron", "Thor", "Hulk", "Captain America", "Black Widow", "Spider"]
const dc = ["Batman", "Superman", "Supergirl"]

//console.log(marvel)
//console.log(dc) 

marvel.push(dc)
console.log(marvel)
//const heroes = [...marvel, ...dc]
//console.log(heroes)

const other_Arrays = [1,2,3,[4,5,6],7,[4,5,[6,8,9]],9];
const flatArray = other_Arrays.flat(2); // Flattens the array to a depth of 2
console.log(flatArray); // [1, 2, 3, 4,

console.log(Array.isArray(flatArray)); // 9
//console.log(Array.from("Dishendra")); // true
console.log(Array.from({name:"Dishendra"})); // true

let score=100
let score2=200
let score3=300
let score4=400

console.log(Array.of(score, score2, score3, score4)); // [100, 200, 300, 400]