const Utils = {
    separarTexto: (texto, quantidadeRetorno) => {
        let textoSeparado = texto.split(" ");
        let retorno = "";
        for ( let i = 0; i < quantidadeRetorno; i++) {
            retorno = retorno + " " + textoSeparado[i];
        }

        return retorno;
    }
}

export default Utils;