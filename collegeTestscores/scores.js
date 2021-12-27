function caculate() {
    let math = document.getElementById("score_Math").value;
    let lit = document.getElementById("score_Lit").value;
    let eng = document.getElementById("score_Eng").value;
    let score =  parseInt(math) + parseInt(lit) + parseInt(eng);
    switch(document.getElementById("KV").value){
        case 'KV1': 
            score = parseInt(math) + parseInt(lit) + parseInt(eng) + 0.75;   
        break;
        case 'KV2':
            score = parseInt(math) + parseInt(lit) + parseInt(eng) + 0.5;
        break;
        case 'KV2-NT':
            score = parseInt(math) + parseInt(lit) + parseInt(eng) + 0.25;
        break;
        default:
            score = parseInt(math) + parseInt(lit) + parseInt(eng);
    }
    document.getElementById("result").innerHTML = "Tổng điểm của bạn là: "+ score;
}