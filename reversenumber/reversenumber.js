function reverse() {
    let a = document.getElementById("input_Number").value;
    let b, sum = 0;
    while(a > 0 ){
        b = a % 10;
        sum = sum * 10 + b;
        a = parseInt(a/10);
    }
    console.log(sum);
}