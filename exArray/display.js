let arr = ["Phạm Duy Hưng","Hà Hồng Hạnh"];

function add() {
    let name = document.getElementById("inputName").value;
    arr.push(name);
    alert("Đã thêm: " + name);
}

function Delete () {
    arr.pop();
}
function display() {
    let list = "";
    for(i = 0; i < arr.length; i++){
        list += arr[i] + "</br>";
    }
    document.getElementById("result").innerHTML = list;
}

