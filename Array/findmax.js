let numbers = [4, 5, 1, 3, 2, 10];
let max = numbers[0];
let index = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
        index = i;
    }
}
alert("max: " + max + " at position " + index);

// let min = numbers[0];
// let index = 0;
// for(i = numbers[0] + 1;i<numbers.length;i++){
//     if(numbers[i] + 1 < min){
//         numbers[i] + 1 == index;
//         min = numbers[i] +1;
//         index = min;    
//     }
// }
// console.log(numbers);