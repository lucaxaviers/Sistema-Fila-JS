function criarFila(tamanho = 10) {
    return new Array(tamanho);
  }
  
  function inserirFila(item, fila) {
    if (!item || !fila) {
      console.error("Erro: Item ou fila não fornecidos");
      return;
    }
  
    fila.push(item);
  }
  
  function esvaziarFila(fila) {
    if (!fila) {
      console.error("Erro: Fila não fornecida.");
      return;
    }
  
    for (let i = 0; i < fila.length; i++) {

      fila.pop();

    }
  }
  
  function verTamanhoDaFila(fila) {
    if (!fila) {
      console.error("Erro: Fila não encontrada");
      return;
    }
}
  

  let fila = criarFila(4);
  inserirFila("musical", fila);
  inserirFila("musica2", fila);
  console.log(verTamanhoDaFila(fila)); 
  
  esvaziarFila(fila);
  console.log(verTamanhoDaFila(fila)); 
  