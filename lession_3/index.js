
    var inputmoney = prompt("Nhập số tiền: ");
    var inputinterestrate = prompt("Nhập phần trăm lãi suất: ");
    var inputyear = prompt("Nhập thời hạn gửi");

    var interestperyear = Math.round(inputmoney * inputinterestrate);
    var interst =  (parseFloat(inputmoney) + parseFloat(inputyear * interestperyear));
    

document.write("Số tiền lãi là:" + interestperyear);
document.write("Số tiền lãi bạn đang có là: " + interst);
