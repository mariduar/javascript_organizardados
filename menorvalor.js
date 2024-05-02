const livros = require('./listalivros';)

let maisBarato = 0;

for (let atual = 0; atual < livros.lenght; atual++) {
   if (livros[atual].preco < livros[maisBarato].preco) {
     maisBarato = atual
   }
}

console.log(`o livro mais barato custa ${livros[maisBarato].preco} e o titulo é ${livros[maisBarato].titulo}`)