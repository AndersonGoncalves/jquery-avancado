var campoDigitacao = $("#campoDigitacao");
var tempoInicial = $("#tempoDigitacao").text();

$(document).ready(function(){
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    $("#reiniciaJogo").click(reiniciaJogo);
});

function atualizaTamanhoFrase(){
    let fraseParaDigitar = $(".fraseParaDigitar").text();
    let numPalavrasParaDigitar = fraseParaDigitar.split(" ").length;
    let tamanhoFrase = $("#tamanhoFrase");
    tamanhoFrase.text(numPalavrasParaDigitar);
}

function inicializaContadores() {
    campoDigitacao.on("input", function(){
        let valorCampoDigitacao = campoDigitacao.val();
        let qtdPalavaDigitada = valorCampoDigitacao.split(/\S+/).length - 1;
        $("#contadorPalavraDigitada").text(qtdPalavaDigitada);
        let semEspaco = valorCampoDigitacao.replace(/\s+/g, '');
        let qtdCaractereDigitado = semEspaco.length;
        $("#contadorCaractereDigitado").text(qtdCaractereDigitado);
    });
}

function inicializaCronometro(){
    campoDigitacao.one("focus", function(){
        let tempoDigitacao = $("#tempoDigitacao").text();
        let id = setInterval(() => {
            tempoDigitacao--;
            $("#tempoDigitacao").text(tempoDigitacao);
            if (tempoDigitacao == 0) {
                campoDigitacao.attr("disabled", true);
                clearInterval(id);
                $("#reiniciaJogo").attr("disabled", false);
            }
        }, 1000);
        $("#reiniciaJogo").attr("disabled", true);
    });    
}

function reiniciaJogo(){
    campoDigitacao.attr("disabled", false).val("");
    $("#contadorPalavraDigitada").text("0");
    $("#contadorCaractereDigitado").text("0");
    $("#tempoDigitacao").text(tempoInicial);
    inicializaCronometro();
}