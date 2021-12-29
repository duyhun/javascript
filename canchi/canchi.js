let nam_duong_lich = prompt("Nhập Năm Dương");
let can = nam_duong_lich % 10;
let chi = nam_duong_lich % 12;
switch(can){
    case 0 :
        can = 'Canh';
        break
    case 1 :
        can = 'Tân';
        break;
    case 2 :
        can = 'Nhâm';
        break;
    case 3 :
        can = 'Qúy';
        break;
    case 4 :
        can = 'Giáp';
        break;
    case 5 :
        can = 'Ất';
        break;
    case 6 :
        can = 'Bính';
        break;
    case 7 :
        can = 'Đinh';
        break;
    case 8 :
        can = 'Mậu';
        break;
    case 9 :
        can = 'Kỉ';
        break;
}
switch(chi){
    case 0 :
        chi = 'Thân';
        break;
    case 1 :
        chi = 'Dậu';
        break;
    case 2 :
        chi = 'Tuất';
        break;
    case 3 :
        chi = 'Hợi';
        break;
    case 4 :
        chi = 'Tý';
        break;
    case 5 :
        chi = 'Sửu';
        break;
    case 6 :
        chi = 'Dần';
        break;
    case 7 :
        chi = 'Mão';
        break;
    case 8 :
        chi = 'Thìn';
        break;
    case 9 :
        chi = 'Tỵ';
        break;
    case 10 :
        chi = 'Ngọ';
        break;
    case 11 :
        chi = 'Mùi';
        break;
}
let nam_am_lich = can + " " + chi;
console.log(nam_am_lich); 