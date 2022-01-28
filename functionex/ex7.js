let num1 = +prompt("Nhập số 1");
let num2 = +prompt("Nhập số 2");
let num3 = +prompt("Nhập số 3");
function checkNumber(num1,num2,num3){
     return Math.min(num1,num2,num3);
}
let min = checkNumber(num1,num2,num3);
console.log(min)
