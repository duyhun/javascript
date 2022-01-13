let sum_of_numbers = 0;
let countNB = 0;
let STN = 0; 
while(countNB != 30){
    if(STN % 7 == 0){
        countNB+= 1; 
        sum_of_numbers += STN; 
    }
    STN++; 
}
console.log(sum_of_numbers);