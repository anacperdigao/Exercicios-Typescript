// Estrutura de dados nao ordenada e é utilizada quando a gente quer enumerar alguma coisa

enum Cores {
  vermelho, //0
  azul, //1
  amarelo, //2
}

/* Se eu rodar isso console.log(Cores), vai gerar isso aqui:
{
  '0': 'vermelho',
  '1': azul,
  '2': amarelo,
  vermelho: 0,
  azul: 1,
  amarelo: 2
}
*/

function escolhaACor(cor: Cores): void {
  console.log(Cores[cor]);
}

console.log(escolhaACor(Cores.vermelho));

//Eu posso mudar o início do índice
enum Cores2 {
  vermelho = 1, //1
  azul, //2
  amarelo, //3
}

//Eu posso mudar todos os índices
enum Cores3 {
  vermelho = 10,
  azul = 20,
  amarelo = 30,
}
