let str = prompt("Nhập mảng VD: 1,2,3,4,5"); //"1,2,3,4,5"
let arr = str.split(","); //["1","2","3","4","5"]
function reverseArray(arr){
    let start = 0;
    let end = arr.length - 1;
    for(start; start < end; start++, end--) {
        arr[start] = arr[start] + arr[end];
        arr[end] = arr[start] - arr[end];
        arr[start] = arr[start] - arr[end];
        // let b = arr[start];
        // arr[start] = arr[end];
        // arr[end] = b;
    }
    return arr;
}
console.log(reverseArray(arr));
// let str = prompt("Nhập mảng VD: 1,2,3,4,5"); //"1,2,3,4,5"
// let arr = str.split(","); //["1","2","3","4","5"]
// function reverseArray(arr) {
//     let first = 0; //0
//     let last = arr.length - 1; //4
//     for (first; first < last; first++, last--) {
//         let b = arr[first]; 
//         arr[first] = arr[last];
//         arr[last] = b; 
//     }
//     return arr;
// }
// console.log(reverseArray(arr));