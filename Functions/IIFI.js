(()=>{
console.log("IIFI");
})(); // ALWAYS ends with a semicolon to avoid errors if the previous line doesn't end with a semicolon 
// Immediately Invoked Function Expression
// Another way to write IIFI
(function(){
    console.log("IIFI2");
})();
// Another way to write IIFI
((name) => {
    console.log(`Hello i am ${name}`);
})("Dishendra singh");