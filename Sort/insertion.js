let old_array = [1, 4, 5, 6, 7, 3, 12, 34];

for (i = 1; i < old_array.length; i++) {
    let value = old_array[i];
    let j = i - 1;
    while (j >= 0 && old_array[j] > old_array[i]) {
        old_array[j + 1] = old_array[j];
        j--;
    }
    old_array[j + 1] = old_array[i];
}
console.log(old_array);