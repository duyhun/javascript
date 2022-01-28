let arr = prompt("Nhập mảng số").split(",");
let number = prompt("Nhập sô");
check(arr,number);
function check(arr, number){
    let count = 0;
    let flag = false;
    for(i = 0; i < arr.length; i++){
        if(arr[i] == number){
            count++;
            flag = true;
        }
    }
    if(flag){
        document.write("Số lần xuất hiện là: " + count);
    }else{
        document.write("tần số lần xuất hiệt là -1")
    }
}
