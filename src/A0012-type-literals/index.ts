// Utilizar valores como tipos

// Nesse caso o tipo é um number que eu posso mudar para outro number quando eu quiser pq é let
let h = 10; // eslint-disable-line
h = 25;

// Nesse caso o tipo é um number que eu NÃO posso mudar para outro number quando eu quiser pq é const
const u = 10;

// Mas eu posso fazer de forma que o let não permite mudar, é só tipar já com o numero que eu quero
// Aqui eu vou usar um subtipo de number
let p: 100 = 100; // eslint-disable-line

// Bem interessante o uso do "as const" para travar um valor
// Nesse objeto, o meu nome seria do tipo string, mas como eu usei "as const" eu travei o valor para 'Luiz'
const pessoa10 = {
  nome: 'Luiz' as const,
  sobrenome: 'Miranda',
};
