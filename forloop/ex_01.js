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

