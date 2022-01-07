function play() {
    let start = prompt("Enter the level");
    let round = 0;
    let input = 0;
    let answer = Math.floor(Math.random() * start);
    while(round < 3){
        input = prompt("Enter the number");
        if(input == answer){
            alert("Congratulation");
            break;
        }
        else{
            round++;
            if(round == 3){
                alert("Game over");
            }
            else{
                alert("Retry");
            }
        }
    }
}