const myarr=["fan","camera",34,null,true,67,"shubham"];
for(let elements of myarr){
    console.log(elements);
}

const map=new Map();
map.set("IN","India");
map.set("US","America");
map.set("CH","China");  
map.set("FR","France");
for(let [key,value] of map){
    console.log("Key is "+key+" and value is "+value);
}
for(let key of map){
    console.log("Key is "+key);
}

console.log(map);