let texto = document.querySelector('#texto');
let saidaDeTexto = document.querySelector('#saida-de-texto');
let buttonCopy = document.querySelector('#button-copy');

let substituicoes = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat'
}

function criptografar(){
    let textoEntrada = texto.value.toLowerCase();
    let textoFinal = textoEntrada.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
    saidaDeTexto.innerHTML = textoFinal.replace(/[aeiou]/g, e => substituicoes[e] || e);

    let botao = document.createElement('button');
    saidaDeTexto.appendChild(botao);
    botao.classList.add('active');
    botao.innerHTML = 'Copiar';
}

function descriptografar(){
    let textoEntrada = texto.value.toLowerCase();
    let textoFinal = textoEntrada.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
    saidaDeTexto.innerHTML = textoFinal.replace(/ai/g, 'a')
                                       .replace(/enter/g, 'e')
                                       .replace(/imes/g, 'i')
                                       .replace(/ober/g, 'o')
                                       .replace(/ufat/g, 'u')

    let botao = document.createElement('button');
    saidaDeTexto.appendChild(botao);
    botao.classList.add('active');
    botao.innerHTML = 'Copiar';
}