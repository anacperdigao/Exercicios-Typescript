// Não é tão utilizado como o union type(significa ou)
// Intersection type é tratado como uma interseção do conjunto (significa and)
// A vantagem de fazer separado é que eu posso reutilizar em mais lugares diferentes esses tipos

type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };

// Se eu utilizar o union type eu to dizendo que é opcional ter os 3 parrametros
type Pessoa8 = TemNome | TemSobrenome | TemIdade;

const pessoa8: Pessoa8 = {
  nome: 'Ana',
  sobrenome: 'Perdigao',
};

// Se eu utilizar o intersection type eu to dizendo que é obrigatorio ter os 3 parrametros
type Pessoa9 = TemNome & TemSobrenome & TemIdade;

const pessoa9: Pessoa9 = {
  nome: 'Ana',
  sobrenome: 'Perdigao',
  idade: 30,
};

// Outra utilização menos utilizada mas que é interessante saber
type AB = 'A' | 'B';
type AC = 'A' | 'C';
type Intersection = AB & AC;
// O type Intersection vai pegar apenas o A
