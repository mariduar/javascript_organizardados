const livros = require('./listalivros');
const menorValor = require('./menorValor');



               //1
for (let atual = 0;atual < livros.lenght - 1; atual++) {
    let menor = menorValor(livro, atual)

    let livroAtual = livros[atual];
    console.log('posicao atual', atual)
    console.log('livro atual', livros[atual])
    let livroMenorPreco = livros[menor];
    console.log('livro menor preco', livros[menor])

    livros[atual] = livroMenorPreco
    livros[menor] = livroAtual
 }

 console.log(livros)
    