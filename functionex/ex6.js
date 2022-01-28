let characters = prompt("Enter what you want to check!")
function checkCharacters(characters){
    if(isNaN(characters)){ // không phải là số thì sẽ trả về là true
        return false;
    }
    else{
        return true;
    }
}

console.log(checkCharacters(characters));