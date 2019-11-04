function inserePlacar(){
    let corpoTabela = $(".placar").find("tbody");
    let usuario = "Anderson";
    let palavrasDigitadas = $("#contadorPalavraDigitada").text();
    let caracteresDigitados = $("#contadorCaractereDigitado").text();    
    var linha = novaLinha(usuario, palavrasDigitadas, caracteresDigitados);
    linha.find(".botaoRemover").click(remover);
    corpoTabela.prepend(linha);
}

function novaLinha(usuario, palavras, caracteres){
    let linha = $("<tr>");
    let colunaUsuario = $("<td>").text(usuario);
    let colunaPalavras = $("<td>").text(palavras);
    let colunaCaracteres = $("<td>").text(caracteres);
    let colunaRemover = $("<td>");

    let link = $("<a>").addClass("botaoRemover").attr("href","#");
    let icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

    //Icone dentro do <a>
    link.append(icone);

    //<a> dentro do <td>
    colunaRemover.append(link);

    //Os três <td> dentro do <tr>
    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaCaracteres);
    linha.append(colunaRemover);

    return linha;
}

function remover(){
    event.preventDefault();
    $(this).parent().parent().remove();
}