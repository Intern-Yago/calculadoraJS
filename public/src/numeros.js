var final = true
const numeros = {
    buttons(){
        $("input[name=btn]").click(function(){
            console.log(final)
            if(final){
                $("#resultado").val($(this).val())
                final=false
            }else{
                $("#resultado").val($("#resultado").val()+$(this).val())
            }
        })
    },
    sinais(sinal){
        if(sinal === "="){
            final = true
        }else{
            $("#sinal").text(sinal)
            final = false
        }
    }

}

export {numeros}