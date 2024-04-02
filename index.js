export function criarFila(tamanho=2) {
    return [...new Array(tamanho)]
}

    export function colocarNaFila(fila = [], item) {
        if (fila.includes(undefined)) {
            fila[fila.indexOf(undefined)] = item
            return
        }
        console.log("nao cabe na fila");
        return
    }
export function retirarDaFila(fila = []) {
    if (fila[0] === undefined) {
        console.log("nao cabe na fila");
        return
    }
    let primeiroLugar = fila[0]
    for (let i = 0; i < fila.length -1; i++) {
        fila[i] = fila[i+1]
    }
    fila[fila.length -1] = undefined
    console.log(primeiroLugar);
    return primeiroLugar
}
export function limparFila(fila=[]) {
        if (fila[0] === undefined) {
            console.log("fila vazia");
            return
        }
        let primeiro = fila[0]
        for (let i = 0; i < fila.length; i++) {
            fila[i]=undefined
    }
    fila[0] fila[0]= primeiro
}
}
