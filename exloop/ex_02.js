let degree = +prompt("Hãy nhập nhiệt độ");
while(degree < 20 || degree > 100){
    degree = +prompt("Hãy nhập nhiệt độ");
    if(degree < 20){
        alert("Nhiệt độ của bạn đang là: " + degree + " Hãy tăng nhiệt độ");
    }else{
        alert("Nhiệt độ của bạn đang là: " + degree + " Hãy giảm nhiệt độ");
    }
}
document.write("Nhiệt độ an toàn")