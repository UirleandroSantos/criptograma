let texto = document.querySelector('#texto');
let saidaDeTexto = document.querySelector('#saida-de-texto');

function criptografar(){
    let textoEntrada = texto.value;
    let textoFinal = textoEntrada.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
    saidaDeTexto.innerHTML = textoFinal.replace(/a/g, '#')
                                       .replace(/e/g, 'Z&d')
                                       .replace(/i/g, 'fL0')
                                       .replace(/o/g, 'Ky')
                                       .replace(/u/g, 'ibis');
}

function descriptografar(){
    let textoEntrada = texto.value;
    saidaDeTexto.innerHTML = textoEntrada.replace(/#/g, 'a')
                                         .replace(/Z&d/g, 'e')
                                         .replace(/fL0/g, 'i')
                                         .replace(/Ky/g, 'o')
                                         .replace(/ibis/g, 'u')
}