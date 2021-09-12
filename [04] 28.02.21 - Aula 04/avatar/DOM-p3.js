// arquivo DOM-p3.js
function TrocarTexto(oCaixaTexto) {
    var textoDigitado = oCaixaTexto.value
  
    // Criando uma referência ao objeto parágrafo
    var oParagrafo = document.getElementById("p1")
  
    // Troca a propriedade innerHTML do parágrafo pelo texto digitado na caixa
    oParagrafo.innerHTML = textoDigitado
  }