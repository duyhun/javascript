function convert() {
    var money = document.getElementById("money").value;
    var result = 0;
    switch(document.getElementById("fromMoney").value){
        case 'USD' : 
            switch(document.getElementById("toMoney").value){
                case 'VND' :
                    result = money * 23000;
                    break;
                case 'Euro': 
                    result = money * 0.89;
                    break;
            }
            break;
        case 'Euro':
            switch(document.getElementById("toMoney").value){
                case 'USD' :
                    result = money * 1.12;
                    break;
                case 'VND': 
                    result = money * 26000;
                    break;
            }
            break;
    }
    
     document.getElementById("result").innerHTML = result;
}