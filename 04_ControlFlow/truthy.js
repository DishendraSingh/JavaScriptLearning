const userEmail = "dishendra@gmail.com";
if (userEmail) {
  console.log("Condition is true");
} else {
  console.log("Condition is false");
}

//lse values in JavaScript
// false    0 ``  "" '' ``  null  undefined  NaN, -0, bigint 0n
// truthy values in JavaScript
// true   1 -1 "dishendra" 'a' [] {} function(){} "0" "false"
const userEmail1 = "Singh"??"dishendra";
if (userEmail1) {
  console.log("Condition is true");
} else {
  console.log("Condition is false");
}

const userEmail2 =  "dishendra";
userEmail2 === "dishendra" ? console.log("Condition is true") : console.log("Condition is false");//ternary operator