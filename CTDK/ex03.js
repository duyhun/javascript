let  login = prompt('Who are you?','');
let pass = prompt('Password?', '');

if(login == Admin){
    // enter your password
}else if (login == TheMaster){
    alert('Welcome');
}else if (login == null){
    alert('Canceled');
}else{
    alert("I don't know you");
}
if (pass == 'TheMaster') {
    alert('Welcome!');
} else if (pass == null) {
    alert('Canceled.');
} else {
    alert('Wrong password');
}