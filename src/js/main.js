//CRIA O OBJETO
const jogoAdivinha = {
    semente : 100,
    tentativa : 0,
    numeroSorteado : function geraNumeroAleatorio(){
    return Math.round(Math.random() * this.semente)
    }
}

//PEGANDO OS ELEMENTOS DA PÁGINA
const btnVerifica = document.getElementById('btnVerifica')
const info = document.getElementById('info')
const tentativa = document.getElementById('tentativa')
const chute = document.getElementById('chute')

//function geraNumeroAleatorio(){
  // return Math.round(Math.random() * jogoAdivinha.semente)
//}

//VARIAVEL QUE CHAMA A FUNÇÃO E RECEBE O NUMERO ALEATÓRIO
let numeroSorteado = jogoAdivinha.numeroSorteado()

//FUNÇÃO QUE ATUALIZA NA PÁGINA O NÚMERO DE TENTATIVAS
function atualizaTentativas(tentativa, valor){
    if(valor > 1){
        tentativa.innerHTML = 'Tentativas : <span style = "color: blue">'+ valor +'</span>'
    }else{
        tentativa.innerHTML = 'Tentativa : <span style = "color: blue">'+ valor +'</span>'
    }
}

//FUNÇÃO QUE REINICIA O JOGO
function reiniciaJogo(){
    btnVerifica.innerText = 'Verificar'
    tentativa.innerHTML = 'Tentativa : 0'
    chute.disabled = false
    chute.value = ''
    jogoAdivinha.tentativa = 0
    numeroSorteado = jogoAdivinha.numeroSorteado()
    btnVerifica.removeEventListener('click', reiniciaJogo)
}

const formAdivinha = document.getElementById('form');
//CRIA O EVENTO NO FORMULÁRIO E FAZ AS VERIFICAÇÕES
formAdivinha.addEventListener('submit', function(event){
    event.preventDefault()

    if(!!chute.value == false){
        info.innerHTML = '<span style = "color: #FF3D00">Digite algum valor</span>'
        return
    }

    atualizaTentativas(tentativa, ++jogoAdivinha.tentativa)

    if(numeroSorteado == chute.value){
        info.innerHTML = '<span style="color:#00C853">Parabéns, você acertou!!</span>'
        chute.disabled = true
        btnVerifica.innerText = 'Quer tentar novamente?'
        btnVerifica.addEventListener('click', reiniciaJogo)
    } else if(numeroSorteado > chute.value){
        info.innerText = 'O número sorteado é maior'
        chute.value = ''
    }else if (numeroSorteado < chute.value) {
        info.innerText = 'O número sorteado é menor'
        chute.value = ''
    }    
})