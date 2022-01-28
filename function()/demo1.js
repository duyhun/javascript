let sum1 = 0;
let sum2 = 0;
let sum3 = 0;
for (i = 1; i <= 10; i++) {
    sum1 += i;
}
console.log(sum1);

for (i = 20; i <= 30; i++) {
    sum2 += i;
}
console.log(sum2);

for (i = 30; i <= 70; i++) {
    sum3 += i;
}
console.log(sum3);

function sum(start,end) {
    let total = 0;
    for(i = start; i <= end;i++){
        total += i;
    }
    return total;
}