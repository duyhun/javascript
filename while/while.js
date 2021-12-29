let num = parseInt(prompt("Enter the number:"));
let total = 0;

while(num != -1){
    num = parseInt(prompt("Enter the number:"))
    alert(num);
    total += num;
}
alert(total);

let i = 1;
while(i <100){
    document.write("<hr width =" + i + "%>");
    i++;
}