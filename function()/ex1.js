function checkSnt(number) {
    let count = 0;
    let countSNT = 0;
    for (i = 2; i <= 1000; i++) {
        if (countSNT < number) {
            for (let j = 1; j <= i; j++) {
                if (i % j == 0) {
                    count += 1;
                }
            }
            if (count == 2) {
                document.write(i + "</br>");
                countSNT += 1;
            }
            count = 0;
        }
        else {
            break;
        }
    }
}
checkSnt(10);


function squareNumber(num) {
    let square = num * num;
    document.write(square);
}
squareNumber(5);

function calculateArea(myRadius){
    let area = (myRadius * myRadius * 3.14);
    document.write(area + "</br>");
}
calculateArea(4);

function diameterCircle(myRadius) {
    let diameter = (2 * myRadius * 3.14);
    document.write(diameter);   
}
diameterCircle(3);

