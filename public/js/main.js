let fraseParaDigitar = $(".fraseParaDigitar").text();
let numPalavrasParaDigitar = fraseParaDigitar.split(" ").length;

let tamanhoFrase = $("#tamanhoFrase");
tamanhoFrase.text(numPalavrasParaDigitar);

function ContadorPalavrasCaracteres() {
    let valorCampoDigitacao = campoDigitacao.val();

    let qtdPalavaDigitada = valorCampoDigitacao.split(/\S+/).length - 1;
    $("#contadorPalavraDigitada").text(qtdPalavaDigitada);

    let semEspaco = valorCampoDigitacao.replace(/\s+/g, '');
    let qtdCaractereDigitada = semEspaco.length;
    $("#contadorCaractereDigitado").text(qtdCaractereDigitada);
}

let campoDigitacao = $("#campoDigitacao");
campoDigitacao.on("input", ContadorPalavrasCaracteres);