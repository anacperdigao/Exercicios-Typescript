// Asserções são basicamente fazer um type coersion, ou seja, convertendo de um tipo pra outro

// Nessa primeira forma eu vou fazer if pra tirar a possibilidade do body ser null
const body1 = document.querySelector('body');
if (body1) body1.style.background = 'red';

// Nessa segunda forma eu NAO vou fazer if pra tirar a possibilidade do body ser null
// Para isso vou utilizar o NON-NULL ASSERTION -> exclamação no
// Com isso eu afirmo que não é nulo
const body2 = document.querySelector('body')!; //eslint-disable-line
body2.style.background = 'red';

// Nessa terceira forma eu NAO vou fazer if pra tirar a possibilidade do body ser null
// Para isso vou utilizar o TYPE ASSERTION
// Com isso eu afirmo que não é nulo
// FORMA MAIS UTILIZADA
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';
