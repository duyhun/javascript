let vertical = 0;
let horizontal = 0;
function moveDown() {
    vertical += 19;
    document.getElementById("tank").style["top"] = vertical + "px";
    
}
function moveUp() {
    vertical -= 19;
    document.getElementById("tank").style["top"] = vertical + "px";
    
}
                    function moveRight() {
    horizontal += 38;
    document.getElementById("tank").style["left"] = horizontal + "px";
    
}
function moveLeft(){
    horizontal -= 38;
    document.getElementById("tank").style["left"] = horizontal + "px";   
}