let texto = document.querySelector('#texto');
let saidaDeTexto = document.querySelector('#saida-de-texto');
let buttonCopy = document.querySelector('#button-copy');

let substituicoesCriptografar = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat'
}

let substituicoesDescriptografar = {
    'ai': 'a',
    'enter': 'e',
    'imes': 'i',
    'ober': 'o',
    'ufat': 'u'
}

function criptografar(){
    let textoEntrada = texto.value.toLowerCase();
    let textoFinal = textoEntrada.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
    saidaDeTexto.innerHTML = textoFinal.replace(/[a|e|i|ou]/g, e => substituicoesCriptografar[e] || e);

    let botao = document.createElement('button');
    saidaDeTexto.appendChild(botao);
    botao.classList.add('active');
    botao.innerHTML = 'Copiar';
}

function descriptografar(){
    let textoEntrada = texto.value.toLowerCase();
    let textoFinal = textoEntrada.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
    saidaDeTexto.innerHTML = textoFinal.replace(/ai|enter|imes|ober|ufat/g, e => substituicoesDescriptografar[e] || e)

    let botao = document.createElement('button');
    saidaDeTexto.appendChild(botao);
    botao.classList.add('active');
    botao.innerHTML = 'Copiar';
}