// A função ou método nunca vai retornar nada
// Só aconteceria com um laço infinito ou um erro

function criaErro(): never {
  throw new Error('Erro qualquer');
}

console.log(criaErro());
