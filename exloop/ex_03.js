let STN1 = 1;
let STN2 = 0;
let fbnc= 0;
let num = +prompt("Nhập số")
while (num >= 1) {
    fbnc = STN1; 
    STN1 = STN1 + STN2; 
    STN2 = fbnc; 
    document.write(STN2 + "<br>");
    num--; 
}