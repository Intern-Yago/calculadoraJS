import { numeros } from "./numeros.js";

var v1,v2,op

function valores(valor){
    if($("#resultado").val() != ""){
        numeros.sinais(valor)
    }else{
        $.notify("Insira os valores corretamente", "error")
        return 'erro'
    }
}
var listOperacoes = ["-", "+", "/", "*"]
const operacoes = {
    calculo(){
        $("input[name=opera]").click(function(){
            let string = $("#resultado").val()
            if(listOperacoes.includes(string.charAt(string.length - 1))){
                $.notify("Insira os valores corretamente", "error")
            }else{
                if($(this).val() == "x"){
                    valores("x")
                    $("#resultado").val($("#resultado").val()+ "*")
                }else{
                    valores($(this).val())
                    $("#resultado").val($("#resultado").val()+ $(this).val())
                }
            }
        })

        $("input[name=equal]").click(function(){
            let string = $("#resultado").val()
            if(listOperacoes.includes(string.charAt(string.length - 1))){
                $.notify("Insira os valores corretamente", "error")
            }else{
                valores($(this).val())
                $("#resultado").val(eval($("#resultado").val()))
                $("#sinal").text("")
                op = ""
            }
            
        })
    }
}

export{operacoes}