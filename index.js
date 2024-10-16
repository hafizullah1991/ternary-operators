let age = 21;
let message = age >19 ? "you are over 21" : " you are minor ";
console.log(message);

let time =11;
let timeam = time <12 ? " Good Morning" : " Good Afternoon";
console.log(timeam);

let isStudent = true;
let student = isStudent ? "you are our student" : " you are not our student";
console.log(student);


// let discount = purchaseAmount > 100 ? 10 : 0;

// console.log(`yout total is $${purchaseAmount - purchaseAmount * (discount /100)}`)

const myNumber = document.getElementById("myNumber");
const subResult = document.getElementById("subResult");
const check = document.getElementById("check");
let purchaseAmount ;
let discount =10;
check.onclick = function(){
let purchaseAmount = myNumber.value;
if(purchaseAmount > 100){
    subResult.textContent= `your total is $${purchaseAmount - purchaseAmount * (discount /100)}`
}
else{
    subResult.textContent = "no discount";
}
}
