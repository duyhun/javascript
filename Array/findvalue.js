let value = prompt("Enter a number: ");
let numbers = [-3, 5, 1, 3, 2, 10];
for (let i = 0; i < numbers.length; i++) {
    if (value == numbers[i]) {
        alert("Value " + numbers[i] + "found at " + i);
    }
}
// for(i = 0; i < numbers - 1; i++){
//     let min = i;
//     for(j = i+1;j<numbers;j++){
//         if(numbers[j] < numbers[min]){
//             min = j;
//             let a = numbers[min];
//             numbers[min] = numbers[i];
//             numbers[i] = a;
//         }
//     }
//     console.log(numbers + " ");
// }