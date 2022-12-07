// let nome: string = 'Ana';
// Aqui o TS já vai inferir que é string através da atribuição, portanto não haveria a necessidade de fazer
// type annotation, que é quando eu informo ao TS o tipo da variável.
// Quando eu salvar, ele automaticamente vai retirar a inferencia de string.
// const name = 'Ana';

/* eslint-disable */

//---------------------- Tipos Básicos (aqui ocorre inferência de tipos, ou seja, esta sendo redundante)
let nome: string = 'Ana';
let idade: number = 30;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer-symbol');
// let big: bigint = 10n;


//---------------------- Arrays - uso de Generic Types <> para dizer o que vai dentro do array
// 1ª FORMA:
let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeStrings: Array<string> = ['a', 'b', 'c'];

// 2ª FORMA:
let arrayDeNumeros2: number[] = [1, 2, 3];
let arrayDeStrings2: string[] = ['a', 'b', 'c'];


//----------------------- Objetos
// 1ª FORMA MUITO VERBOSA:
let pessoa: {nome: string, idade: number, adulto: boolean} = {
  nome: 'Ana',
  idade: 30,
  adulto: true
}

// 2ª FORMA USANDO TYPE ALIAS, OU SEJA, CRIEI O MEU TIPO:
type Pessoa = {nome: string, idade: number, adulto: boolean}

let pessoa2: Pessoa = {
  nome: 'Ana',
  idade: 30,
  adulto: true
}


//----------------------- Functions
// 1ª FORMA:
function soma(x: number, y: number): number {
  return x + y
}

// 2ª FORMA:
const soma2: (x: number, y: number) => number = (x, y) => x + y

// 3ª FORMA:
type Soma = (x: number, y: number) => number

const soma3: Soma = (x, y) => x + y
