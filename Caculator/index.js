function addition() {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let addition = parseInt(a) + parseInt(b);
    document.getElementById("caculator").innerHTML = addition;
}
function subtraction() {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let addition = parseInt(a) - parseInt(b);
    document.getElementById("caculator").innerHTML = addition;
}
function multipilication() {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let addition = parseInt(a) * parseInt(b);
    document.getElementById("caculator").innerHTML = addition;
}
function division() {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let addition = parseInt(a) / parseInt(b);
    document.getElementById("caculator").innerHTML = addition;
}
