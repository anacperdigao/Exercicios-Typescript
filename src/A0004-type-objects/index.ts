// Aqui já vai sofrer a inferência de tipos
// Exemplo 1
const objetoA = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objetoA.chaveA = 'Outro valor'; //Aqui eu posso fazer pq estou mudando o valor da chaveA com outra string

// Aqui vou fazer type annotation
// Exemplo 2
const objetoB: {
  chaveA: string;
  readonly chaveB: string;
  chaveC?: string;
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objetoB.chaveA = 'Outro valor';
// Aqui não consigo mudar pq na hora de tipar eu coloquei readonly de proposito
// objetoB.chaveB = 'Outro valor';
objetoB.chaveC = 'Outro valor';
