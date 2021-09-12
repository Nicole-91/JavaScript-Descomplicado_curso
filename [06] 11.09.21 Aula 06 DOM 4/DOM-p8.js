/* salvar como DOM-p8.js*/
function areaEmail(checado) {
    var area = document.getElementById("areaEmail")
  
    // Se estiver checado é para mostrar a área de email
    if(checado) {
       area.style.display = "block"
    }
    else {
     // Esconder a área
       area.style.display = "none"
      document.getElementById("email").value=""
    }
  }
  