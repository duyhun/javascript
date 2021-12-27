
//khai báo lớp của đối tượng
function Student(id,name,address) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.getInfor = function () {
        return "Id = " + this.id + " Name = " + this.name + " Address = " + this.address;
    }
}

// khởi tạo đối tượng của lớp
let student = new Student(1, "Hà Hồng Hạnh", "Hà Nội");
console.log(student.getInfor());