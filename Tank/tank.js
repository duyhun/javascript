let vertical = 0;
let horizontal = 0;
function move_right() {
    vertical += 19;
    document.getElementById("tank").style["top"] = vertical + "px";
}
function move_down() {
    horizontal += 38;
    document.getElementById("tank").style["left"] = horizontal + "px";
}