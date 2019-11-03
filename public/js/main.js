var campoDigitacao = $("#campoDigitacao");
var tempoInicial = $("#tempoDigitacao").text();

$(document).ready(function() {    
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    inicializaMarcadores();
    $("#reiniciaJogo").click(reiniciaJogo);
    campoDigitacao.addClass("bordaPreta");   
});

function atualizaTamanhoFrase(){
    let fraseParaDigitar = $(".fraseParaDigitar").text();
    let numPalavrasParaDigitar = fraseParaDigitar.split(" ").length;
    let tamanhoFrase = $("#tamanhoFrase");
    tamanhoFrase.text(numPalavrasParaDigitar);
}

function inicializaContadores(){
    campoDigitacao.on("input", function() {
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
            if (tempoDigitacao < 1) {
                campoDigitacao.attr("disabled", true);
                clearInterval(id);
                campoDigitacao.toggleClass("campoDesativado");                
                campoDigitacao.removeClass("bordaVerde");
                campoDigitacao.removeClass("bordaVermerlha");
                campoDigitacao.addClass("bordaPreta");
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
    campoDigitacao.toggleClass("campoDesativado");    
    campoDigitacao.removeClass("bordaVerde");
    campoDigitacao.removeClass("bordaVermerlha");
    campoDigitacao.addClass("bordaPreta");   
}

function inicializaMarcadores(){
    let frase = $(".fraseParaDigitar").text();
    campoDigitacao.on("input", function(){
        let digitado = campoDigitacao.val();
        let comparavel = frase.substr(0, digitado.length);

        campoDigitacao.removeClass("bordaPreta");
        if (campoDigitacao.val() == ""){
            campoDigitacao.addClass("bordaPreta");
        }
        else {
            if (digitado == comparavel){ //Ou: if (frase.startsWith(digitado))
                campoDigitacao.addClass("bordaVerde");
                campoDigitacao.removeClass("bordaVermelha");            
            }
            else {
                campoDigitacao.addClass("bordaVermelha");
                campoDigitacao.removeClass("bordaVerde");
            }
        }
    });
}