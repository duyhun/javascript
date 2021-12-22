function bmi() {
    let  a = document.getElementById("height").value;
    let  b = document.getElementById("weight").value;
    let  bmi = b/(a^2);
    console.log(bmi);
    
    if (bmi < 16){
        document.getElementById("result").innerHTML = "Gầy Độ 3";
    }
    else if (bmi <17){
        document.getElementById("result").innerHTML = "Gầy Độ 2";
    }
    else if( bmi <18.5){
        document.getElementById("result").innerHTML = "Gầy Độ 1";
    }
    else if(bmi <= 25){
        document.getElementById("result").innerHTML = "Bình thường";
    }
    else if(bmi <30){
        document.getElementById("result").innerHTML = "Thừa Cân";
    }
    else if(bmi <35){
        document.getElementById("result").innerHTML = "Béo phì cấp độ 1";
    }
    else if(bmi < 40){
        document.getElementById("result").innerHTML = "Béo phì cấp độ 2";
    }
    else{
        document.getElementById("result").innerHTML = "Béo phì cấp độ 3";
    }
}