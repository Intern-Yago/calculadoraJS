import { limpar, remover } from "./funcoesCalculadora.js";
import {numeros} from "./numeros.js"
import {operacoes} from "./operacoes.js"

const calculadora = {
    async start(){
        $( "#clear" ).on({
            mousedown: function() {
                $(this).data('timer', setTimeout(function() {
                    limpar()
                }, 500));
            },
            mouseup: function() {
                clearTimeout( $(this).data('timer') );
                remover()
            }
            });
        numeros.buttons()
        operacoes.calculo()
    }
}

export{calculadora}