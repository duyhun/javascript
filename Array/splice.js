let  array = ["code", "gym", "vn"];
console.log(array);
array.splice(1,1);

let  student = [
    {
        id:1,
        name : "Nguyễn Văn A",
        Address: "Hà Nội"
    },
    {
        id:2,
        name : "Nguyễn Văn B",
        Address: "Đà Nẵng"
    }
]
console.log(student);
for(let i = 0; i < student.length; i++){
    if(student[i].id == 2){
        student.splice(i, 1);
    }
}
console.log(student);