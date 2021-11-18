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

const operacoes = {
    calculo(){
        $("input[name=opera]").click(function(){
            console.log($(this).val())
            if($(this).val() == "x"){
                valores("x")
                $("#resultado").val($("#resultado").val()+ "*")
            }else{
                valores($(this).val())
                $("#resultado").val($("#resultado").val()+ $(this).val())
            }
        })

        $("input[name=equal]").click(function(){
            valores($(this).val())
            $("#resultado").val(eval($("#resultado").val()))
            $("#sinal").text("")
            op = ""
            
        })
    }
}

export{operacoes}