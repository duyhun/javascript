function search() {
    let fruits = document.getElementById("fruits").value;
    let results = 0;
    switch(document.getElementById("fruits").value){
        case 'Ổi': 
            results = fruits + ":" + "20000 VNĐ/kg"; 
        break;
        case 'Dưa Hấu' :
            results = fruits + ":" + "20000 VNĐ/kg"; 
        break;
        case 'Táo' :
            results = fruits + ":" + "30000 VNĐ/kg"; 
        break;
        case 'Xoài' :
            results = fruits + ":" + "30000 VNĐ/kg"; 
        break;
        case 'Cam' :
            results = fruits + ":" + "40000 VNĐ/kg"; 
        break;
        case 'Chôm Chôm' :
            results = fruits + ":" + "40000 VNĐ/kg"; 
        break;
        case 'Măng Cụt' :
            results = fruits + ":" + "50000 VNĐ/kg"; 
        break;
        default :
            alert("Enter the name!");
    }
    document.getElementById("results").innerHTML = results;
}
