function limpar(){
    $("#resultado").val("")
    $("#sinal").text("")
    var op = ""
}

function remover(){
    let textoAntigo = $("#resultado").val()
    $("#resultado").val(String(textoAntigo).slice(0,-1))
}

export {limpar, remover}