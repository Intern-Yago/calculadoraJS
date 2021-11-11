import { numeros } from "./numeros.js";

var v1,v2,op

function valores(valor){
    if($("#resultado").val() != ""){
        let valorX = parseFloat($("#resultado").val())
        let opera = valor[0].name
        numeros.sinais(valor.val())
        $("#resultado").val("")
        return [valorX,opera]
    }else{
        $.notify("Insira os valores corretamente", "error")
        return 'erro'
    }
}

const operacoes = {
    calculo(){
        $("input[name=soma]").click(function(){
            var resultados = valores($(this))
            v1 = resultados[0]
            op = resultados[1]
        })
        $("input[name=sub]").click(function(){
            var resultados = valores($(this))
            v1 = resultados[0]
            op = resultados[1]
        })
        $("input[name=divi]").click(function(){
            var resultados = valores($(this))
            v1 = resultados[0]
            op = resultados[1]
        })
        $("input[name=mult]").click(function(){
            var resultados = valores($(this))
            v1 = resultados[0]
            op = resultados[1]
        })

        $("input[name=equal]").click(function(){
            var resultados = valores($(this))
            v2 = resultados[0]
            switch (op){
                case "soma":
                    $("#resultado").val(v1+v2)
                    break
                case "sub":
                    $("#resultado").val(v1-v2)
                    break
                case "divi":
                    $("#resultado").val(v1/v2)
                    break
                case "mult":
                    $("#resultado").val(v1*v2)
                    break
            }
            $("#sinal").text("")
            op = ""
            
        })
    }
}

export{operacoes}