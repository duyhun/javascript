let sout = "<table border='1' width='900' cellspacing='0' cellpadding='5'>"
for(i = 2; i < 10; i++){
    sout = sout + "<tr>";
    for(j = 1; j <=9; j++){
        sout = sout + "<td>" + i * j + "</td>";
    }
    sout = sout + "</td>";
}

sout =  sout + "</table>";
document.write(sout);
