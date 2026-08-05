let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {te: 1.3;})}
function exibirMensagemInicial(){
    exibirTextoNaTela('h1','Bem vindo ao jogo do numero secreto');
    exibirTextoNaTela('p','Escolha um número entre 1 e ' + numeroLimite + 
        ' e tente acertar o número secreto');
}
exibirMensagemInicial();
function verificarChute() {
    let chute = document.querySelector ('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' :
         'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com
         ${tentativas} ${palavraTentativa}!!!`;
        exibirTextoNaTela ('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
             exibirTextoNaTela ('h1', 'Tente de novo');
            exibirTextoNaTela ('p', 'O número secreto é menor');
    } else {
        exibirTextoNaTela ('h1', 'Tente de novo');
        exibirTextoNaTela ('p', 'O número secreto é maior');
    }
    tentativas++
    limparCampo()
}
}

function gerarNumeroAleatorio() {
    let numeroEscolido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementos = listaDeNumerosSorteados.length;

if (quantidadeDeElementos >= numeroLimite) {
    alert('Todos os números já foram sorteados, aperte OK para reiniciar o jogo');
    return;
}

    if (listaDeNumerosSorteados.includes(numeroEscolido)) {
    return gerarNumeroAleatorio();
}else {
    listaDeNumerosSorteados.push(numeroEscolido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolido;
}
}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value= '';
}


function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
>>>>>>> d6af1171f7e731c86e3d31fa1bdfe25e35967c1c
}