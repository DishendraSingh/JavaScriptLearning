const arr=[1,2,3,4,5,6,7,8,9,10];
const mewnum=arr.map((value)=>{
    return value*5;
}).map((value)=>{
    return value+1;
}).filter((value)=>{
    return value>10;
});
console.log(mewnum);