let num = prompt("Nhập Dãy Số");
let str = num.toString();
let result = [str[0]];

for(i = 1; i < str.length; i++){
    if((str[i - 1] % 2 === 0)&& (str[i] % 2 === 0 )){
        result.push(" - ",str[i]);
    }
    else
     {
      result.push(str[i]);
     }
  }
console.log(result.join(''));
