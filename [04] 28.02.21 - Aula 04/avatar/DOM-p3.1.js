// arquivo DOM-p3.1.js
function TrocarTexto(textoDigitado) {
    // Criando uma referência ao objeto parágrafo
    var oParagrafo = document.getElementById("p1")
  
    // Troca a propriedade innerHTML do parágrafo pelo texto digitado na caixa
    oParagrafo.innerHTML = textoDigitado
  }