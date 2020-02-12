
let altura = 0
let largura = 0
let acerto = 0
let tempo = 9
let vidas = 1
let criaMosquito = 1500

// função de captura do tamanho da tela para ajustar automaticamente a area de exibição dos mosquito
function ajustarTamanhoJanela(){
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(largura, altura)
}

let nivel = window.location.search

    nivel = nivel.replace('?', '')

    if(nivel === 'normal'){
        criaMosquito = 1500
    }else if (nivel ===  'dificil'){
        criaMosquito = 1000
    }else if (nivel === 'chucknorris'){
        criaMosquito = 300
    }


ajustarTamanhoJanela()


    let cronometro = setInterval( function (){
        {
            tempo -= 1    
            if(tempo <= 0){
                clearInterval(cronometro)
                clearInterval(criaMosca)
                window.location.href = 'vitoria.html'
            }else{
                document.getElementById('resultado').innerHTML = "Tempo restante: " + tempo + " acertos: " + acerto
            }
    
            
        }
    }, 1000) 
let erro

let mostrarErro = function () {
    console.log(erro)
}
function positionRandom(){
    //Remover mosquito anterios (caso exista)
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()
        if(vidas > 3){
            try{
                console.log("passei aqui")
            }
            catch(e){
                erro = e
            }
            window.location.href = ('fim_de_jogo.html')

        }
        document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
        vidas++


        /* minha forma de editar os elementos para reduzir as vidas
        vidas -= 1
        if (vidas == 2){
            document.getElementById('v1').src = "imagens/coracao_vazio.png"
        }else if (vidas == 1){
            document.getElementById('v2').src = "imagens/coracao_vazio.png"
        }else {
            document.getElementById('v3').src = "imagens/coracao_vazio.png"
        }*/
    }

    let positionX = Math.floor(Math.random() * largura) - 90
    let positionY = Math.floor(Math.random() * altura) - 90

    positionX = positionX < 0 ? 0 : positionX
    positionY = positionY < 0 ? 0 : positionY
    console.log(positionX, positionY)

    //criar o elemento html

    let mosquito = document.createElement('img')
    mosquito.src = "imagens/mosca.png"
    mosquito.className = tamanhoAleatorio()
    mosquito.style.left = positionX + 'px'
    mosquito.style.top = positionY + 'px'
    mosquito.style.position = "absolute"
    mosquito.style.transform = ladoAleatorio()
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        this.remove()
        acerto += 1

    }  

    document.body.appendChild(mosquito)

}
//função que altera as classes de estilo do elemento mosquito
function tamanhoAleatorio(){
    let classe = Math.ceil(Math.random() * 3)
    console.log(classe)
    if(classe == 2){
        return "mosquito2"
    }else if (classe == 3){
        return "mosquito3"
    }else {
        return "mosquito1"
    }
}
// função que inverte a posição do mosquito ao contrário
function ladoAleatorio(){
    let classe = Math.floor(Math.random() * 2)
    console.log(classe)
    if(classe == 1){
        return "scaleX(-1)"
    }else {
        return "scaleX(1)"
    }
}

/* Lógica que eu implementei para os tamanho aleátorio dos mosquito
function tamanhoAleatorio(mosquito){
    let classe = Math.ceil(Math.random() * 3)
    console.log(classe)
    if(classe == 2){
        mosquito.className = "mosquito2"
    }else if (classe == 3){
        mosquito.className = "mosquito3"
    }else {
        mosquito.className = "mosquito1"
    }
}*/