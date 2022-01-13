let array = [30,43,25,12,31];
for(i = array.length; i > 2; i--){
    for(j = 0;j < i-1; j++){
        if(array[j] < array[j + 1]){
            array[j] = array[j]+array[j+1];
            array[j+1] = array[j]-array[j+1];
            array[j] = array[j]-array[j+1];
        }
    }
}
console.log(array);



// a = a + b = a mới;
// a = a - a = b;
// b = a mới - b mới
// 
// a = 2 
// b = 3

// a = 2(a) + 3(b) = 5(an);
// a = 5(an) - 2(a) = 3(b);
// b = 5(an) - 3(b) = 2(a);