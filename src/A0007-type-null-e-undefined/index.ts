// No início, o x é any pq nao atribui nada, mas ao mesmo tempo ele é undefined pq eu consegui fazer a condição if nele e ele virou number depois
let x;
if (typeof x === 'undefined') x = 20;
console.log(x * 2);

// O undefined entra quando eu uso um parâmetro opcional

function createPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}

// O null já é mais utilizado que o undefined
function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

const squareOfTwoNumber = squareOf(2);

console.log(squareOfTwoNumber * 2);

// Agora pra ele entender se é null ou number, tenho que fazer um estreitamente das checagens
if (squareOfTwoNumber === null) {
  console.log('Conta inválida');
} else {
  console.log(squareOfTwoNumber * 100);
}
