// Nessa primeiro exemplo, o TS não entenderia e nao inferiria nenhum tipo, atribuindo então o type any
// O ideal é fugir sempre do tipo any, uma vez que não especifica nada para nosso código

// function mostrarMensagem(msg) {
//   return msg;
// }

function mostrarMensagem(msg: string) {
  return msg;
}

console.log(mostrarMensagem('Olá'));
