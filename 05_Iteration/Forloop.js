for(let index=0; index<5; index++){
    console.log("Hello World", index);
}
const array = [10,20,30,40,50];
for(let i=0; i<array.length; i++){
    console.log("Array Element", array[i]);
    if(array[i]===30){
        console.log("Element Found");
        break;
    }
}