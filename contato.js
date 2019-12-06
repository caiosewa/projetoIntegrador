function validateForm() {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var tel = document.getElementById("telefone").value;
    var mensagem = document.getElementById("mensagem").value;
    var nameValid = false;
    var emailValid = false;
    var telValid = false;
    var mensagemValid = false;


    if (name.length == 0 || name.length < 5) {
        document.getElementById("alert-name").innerHTML = "Nome deve contar mais de 5 caracteres!";
        document.getElementById("alert-name").style.display = "";
    } else {
        document.getElementById("alert-name").innerHTML = "";
        document.getElementById("alert-name").style.display = "none";
        nameValid = true;
    }


    if (email.length == 0 || email.indexOf("@") < 1 || email.indexOf('.') < 7) {
        document.getElementById("alert-email").innerHTML = "Email inválido!";
        document.getElementById("alert-email").style.display = "";
    } else {
        document.getElementById("alert-email").innerHTML = "";
        document.getElementById("alert-email").style.display = "none";
        emailValid = true;
    }


    if (tel.length == 0) {
        document.getElementById("alert-tel").innerHTML = "Telefone inválido!";
        document.getElementById("alert-tel").style.display = "";
    } else {
        document.getElementById("alert-tel").innerHTML = "";
        document.getElementById("alert-tel").style.display = "none";
        telValid = true;
    }

    if (mensagem.length == 0) {
        document.getElementById("alert-mensagem").innerHTML = "Campo de entrada inválido!";
        document.getElementById("alert-mensagem").style.display = "";
    } else {
        document.getElementById("alert-mensagem").innerHTML = "";
        document.getElementById("alert-mensagem").style.display = "none";
        mensagemValid = true;
    }
if (nameValid == true && emailValid == true && telValid == true && mensagemValid == true) {
    alert("Enviado com Sucesso!");
}
else {
    alert("Erro ao enviar a mensagem!");
}
}

