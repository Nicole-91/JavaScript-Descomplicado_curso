/* salvar como DOM-p7.js */
function Iniciar() {
    aviso.style.display="none"
    areaDados.style.display="block"
    _musica.volume=0.1
    _musica.play()  
  }
  
  function Adicionar(){
      var nome = document.getElementById("nome").value
      
      // Está vazio?
      if(nome==""){
          alert("O nome do(a) jogador(a) deve ser informado!")
      }
      else{
          var objLista = document.getElementById("listaJogadores")
          var opcao = document.createElement("option")
          opcao.text = nome
          
          objLista.add(opcao)
          alert("Jogador(a) " + nome+ " foi adicionado(a)!")
      }
  }
  
  function Remover(){
      var nome = document.getElementById("nome").value
      
      // Está vazio?
      if(nome==""){
          alert("O nome do(a) jogador(a) deve ser informado!")
      }
      else{
          var objLista = document.getElementById("listaJogadores")
          // Verificando se a lista está vazia
          var itens = objLista.length
          if(itens==0){
              alert("A lista está vazia. Não há o que remover.")
          }
          else{
              var achou =false
              // Varrendo a lista para procurar o nome digitado
              for(var n=0; n<itens ; n++){
                  var opcao = objLista.options[n]
                  //alert(opcao.text)
                  if(opcao.text==nome){
                      // achei o nome - guardo a posição da opcao na lista
                      var posicao = n
                      achou = true
                      // e saio do loop
                      break
                  }
              }
              if(achou){
                  // eliminar a opção encontrada da lista
                  objLista.remove(posicao)
                  alert("Jogador(a) " + nome + " removido(a)")
              }
              else{
                  alert("Jogador(a) " + nome + " não foi encontrado(a)")
              }
          }
      }
  }