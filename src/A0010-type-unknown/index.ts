//unknown é tipo um any, só que mais seguro e mais forte que any

//Exemplo com any, onde ele permite somar string com number
let z: any;

z = '10';
z = 5;
z = '50';

const y = 80;

console.log(z + y);

//Exemplo com unknown, onde ele NÃO permite somar string com number
let a: unknown;

a = '10';
a = 5;
a = '50';

const b = 80;

console.log(a + b);
