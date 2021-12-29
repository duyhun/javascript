let vertical = 0;
let horizontal = 0;
let img = document.getElementsById("boom")[0].src;

function moveDown() {
    vertical += 19;
    document.getElementById("tank").style["top"] = vertical + "px";
    if(vertical == 95 && horizontal == 114){
        img = "explosion.png";
    }
}
function moveUp() {
    vertical -= 19;
    document.getElementById("tank").style["top"] = vertical + "px";
    if(vertical == 95 && horizontal == 114){
        img = "explosion.png";
    }
}
function moveRight() {
    horizontal += 38;
    document.getElementById("tank").style["left"] = horizontal + "px";
    if(vertical == 95 && horizontal == 114){
        img = "explosion.png";
    }
}
function moveLeft(){
    horizontal -= 38;
    document.getElementById("tank").style["left"] = horizontal + "px";
    if(vertical == 95 && horizontal == 114){
        img = "explosion.png";
    }
}
