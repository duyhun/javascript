let name = prompt("Nhập tên");
let names = ["Hưng" ,"Hạnh" , "Khánh", "Quân", "Hương" , "Linh", "An"];
let flag = false;
let index = 0;
for(i = 0; i < names.length ; i++){
    if(names[i] == name){
        index = i;
        flag = true;
        break;
    }
}
if(flag){
    document.write("Có, nằm ở vị trí thứ :" + index);
}else{
    document.write("Không");
}