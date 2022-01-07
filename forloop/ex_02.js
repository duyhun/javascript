function calculate() {
    let a = +document.getElementById("number_1").value;
    let b = +document.getElementById("number_2").value;
    let result = 0;
    for (i = a ; i <= b; i++){
        result += i;
    }
    console.log(result);
}
