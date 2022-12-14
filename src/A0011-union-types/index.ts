// Quando eu tenho mais de um tipo de retorno ou parametro ou variavel

function addOrConcat(x1: number | string, x2: number | string) {
  if (typeof x1 === 'number' && typeof x2 === 'number') return x1 + x2;
  // Se eu tivesse feito assim, ele não cobriria todas as opções de retornos, por isso digo que se nao for Number,
  // vai sempre concatenaStrings, e aí sim o TS vai inferir que a função só vai retornar ou number ou string
  // if (typeof x1 === 'string' && typeof x2 === 'string') return x1 + x2;
  return `${x1}${x2}`;
}

console.log(addOrConcat(10, 30));
