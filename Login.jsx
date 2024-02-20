var login = "teste";
var senha = "teste";

var txtLogin = document.getElementById("txtLogin");
var txtSenha = document.getElementById("txtSenha");

export const fazerLogin = (e) => {

var login = "test";
var senha = "test";

//var txtLogin = document.getElementById("txtlogin");
//var txtSenha = document.getElementById("txtSehha");

    if (txtLogin.value == login && txtSenha.value == senha) {
        console.log("Acesso liberado");
    } else {
        console.log("Login ou senha invalidos");
    
    }
    return true;
}
