/* salvar como nomeLegal.js */
function nomeMaiusculo(nome){
	nome = nome.trim() // remove espaços à esquerda e direita do nome
	var tamanho = nome.length // tamanho (um número) do nome (caracteres)
	//alert(tamanho)
	
	// Seta primeiro caractere do nome para ficar em maiúsculo
	var aumentar=true 

	for (var n=0; n<tamanho ; n++){
		if(aumentar){
			// pego o caractere atual do nome
			// nome[n]
			var codigoCaracter = nome.charCodeAt(n)
			//alert(codigoCaracter)
			
			// se for minúsculo, 
			if(codigoCaracter>96){
				// pego ele e converto para maiúsculo
				//alert(codigoCaracter-32)
				// alert(String.fromCharCode(codigoCaracter-32))
				var parteEsquerda = nome.substring(0,n) 
				var letraMaiusculo = String.fromCharCode(codigoCaracter-32)
				var parteDireita =  nome.substring(n+1,tamanho)
				
				nome = parteEsquerda + letraMaiusculo + parteDireita
			}
			aumentar = false
		}
		if(nome.charAt(n) ==" "){
			// Caractere atual é um espaço. O próximo caractere deve ficar em maiúsculo
			aumentar = true
		}
	}
	return (nome)
}