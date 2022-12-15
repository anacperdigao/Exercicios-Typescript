// criar um apelido para o tipo

type Idade = number;

type CorRGB = 'vermelho' | 'verde' | 'azul';

type CorCMYC = 'ciano' | 'magenta' | 'amarelo' | 'preto';

type CorPreferida = CorRGB | CorCMYC;

type Pessoa2 = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: CorPreferida;
};

const pessoa4: Pessoa2 = {
  nome: 'Ana',
  idade: 30,
  salario: 10000,
  corPreferida: 'amarelo',
};

console.log(pessoa4);
