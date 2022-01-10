let sout = "<table border='1' width='1100' cellspacing='15' cellpadding='8'>"
for( j = 1; j <= 9; j++){
    sout = sout + "<tr>";
    for(i = 1;i <=10;i++){
        let product = j * i;
        sout = sout + "<td>" + j + " * " +  i + " = " + product + "</td>";
    }
    sout = sout + "</tr>";
}
sout = sout + "</table>";
document.write(sout);
