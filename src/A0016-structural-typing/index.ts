// Comportamento que pode deixar confuso
// Tipagem estrutrada -> a identidade do tipo não importa, somente as restrições daquele tipo
// Ou seja, o tipo User nao importa muito, o que importa é que eu siga a restrição de que preciso receber
// um objeto com as chaves username e password que sejam strings

type VerifyUserFn = (user: User, sentValue: User) => boolean;

type User = {
  username: string;
  password: string;
};

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const bdUser = { username: 'Joao', password: '123456' };
const sentUser = { username: 'Joao', password: '123456' };

const loggedIn = verifyUser(bdUser, sentUser);
// Resposta vai dar true se eu fizer console.log(loggedIn)
