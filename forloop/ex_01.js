for(i = 0; i < 6; i++){
    document.write("* ".repeat(i) + "<br>");
}

let str = "";
for(let i = 1; i < 6; i++ ){
    for(let j = 1; j < 6; j++){
        if(i <= j ){
            str = str.concat("* ");
        }else{
            str = str.concat(" ")
        }
    }
    str = str.concat("<br>")
}
document.write(str);

for(i = 1; i <= 5; i++){
    for(k = 5; k > i; k--){
        document.write("&ensp;");
    }
    for(j = 1; j <= i; j++){
        document.write("*");
    }
    document.write("<br>")
}
document.write("<br>")

for(i = 5; i >= 1; i--){
    for(k = 5; k > i; k--){
        document.write("&nbsp" + "&nbsp");
    }
    for(j = 1; j <= i; j++){
        document.write("*");
    }
    document.write("<br>")
}
document.write("<br>")

