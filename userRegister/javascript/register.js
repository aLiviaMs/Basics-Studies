var emailsEx = ['liv@gmail.com','teste@hotmail.com','uuu@gmail.com','abcd@gmail.com','dcba@hotmail.com','abcd@hotmail.com']

function validadeRegister(){
    var password = document.getElementById('password').value;
    var aNumber = /[0-9]/;
    var aLetter = /[A-Za-z]/;
    var emailUser = document.getElementById('emailId').value;
    
    for(var i = 0; i<emailsEx.length; i++){
        if(emailsEx[i] == emailUser){
            alert("ERRO");
        } else{
            alert("OK");
        }
    }
    
    if(password.length < 6 || password.length > 20 || password.search(aNumber) == -1 || password.search (aLetter) == -1){
        alert("Senha inválida");
    } else{
        alert("Senha válida");
    }
}