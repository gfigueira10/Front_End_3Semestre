function validarFormulario() {
    let nome = document.getElementById("nome").value;

    let sobrenome = document.getElementById("sobrenome").value;

    let email = document.getElementById("email").value;

    let telefone = document.getElementById("telefone").value;

    let ddd = document.getElementById("ddd").value;

    let numero = document.getElementById("numero").value;

    let endereco = document.getElementById("endereco").value;

    let Cep = document.getElementById("Cep").value;

    let quantidadedeErros = 0;

    if (nome.trim().length == 0) {
        formError("nome");
        quantidadedeErros++;
        alert("O campo nome é obrigatorio!");
    }else{
        reiniciaBorda("nome");
    }


    if (sobrenome.trim().length == 0) {
        formError("sobrenome");
        quantidadedeErros++;
        alert("O campo sobrenome é obrigatorio!");

    }else{
        reiniciaBorda("sobrenome");
    }


    if (email.trim().length == 0) {
        formError("email");
        quantidadedeErros++;
        alert("O campo email é obrigatorio!");

    }else{
        reiniciaBorda("email");
    }


    if (telefone.trim().length == 0) {
        formError("telefone");
        quantidadedeErros++;
        alert("O campo telefone é obrigatorio!");

    }else{
        reiniciaBorda("telefone");
    }

    if (ddd.trim().length == 0) {
        formError("ddd");
        quantidadedeErros++;
        alert("O campo ddd é obrigatorio!");

    }else{
        reiniciaBorda("ddd");
    }


    if (numero.trim().length == 0) {
        formError("numero");
        quantidadedeErros++;
        alert("O campo numero é obrigatorio!");

    }else{
        reiniciaBorda("numero");
    }



    if (endereco.trim().length == 0) {
        formError("endereco");
        quantidadedeErros++;
        alert("O campo endereco é obrigatorio!");

    }else{
        reiniciaBorda("endereco");
    }





    if (Cep.trim().length == 0) {
        formError("Cep");
        quantidadedeErros++;
        alert("O campo Cep é obrigatorio!");

    }else{
        reiniciaBorda("Cep");
    }















    if (quantidadedeErros > 0) {
        alert("Existem " + quantidadedeErros + "erros no formulario!");
        quantidadedeErros = 0
    }else{
        alert("Formulario enviado com sucesso!");
        reiniciaTodasAsBordas();
    }
}



function formError(idCampo) {
    document.getElementById(idCampo).style.border = "2px solid red";
}



function reiniciaBorda(idCampo) {
    document.getElementById(idCampo).style.border = "transparent";
}