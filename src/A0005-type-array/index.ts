// Duas formas de passar arrays

// Usando Generics
function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((acc, valor) => acc * valor, 1);
}

multiplicaArgs(2, 5, 7, 9);

// Sem usar Generics
function concatenaStrings(...args: string[]) {
  return args.reduce((acc, valor) => acc + valor);
}

concatenaStrings('a', 'b', 'c', 'd');
