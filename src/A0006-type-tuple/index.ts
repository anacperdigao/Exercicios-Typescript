// É um array com tipo e tamanho fixo

//Caso 1: tamanho fixo
const dadosCliente: [number, string] = [1, 'Luiz'];

console.log(dadosCliente);

//Caso 2: tamanho variável porque o ultimo parâmetro é opcional
const dadosCliente2: [number, string, string?] = [1, 'Luiz', 'Miranda'];

console.log(dadosCliente2);
