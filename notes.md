---------------------------------------- Instalação Inicial ---------------------------------------------

- Comecei o repositorio baixando um gitignore do site https://www.toptal.com/developers/gitignore
- Depois no terminal do projeto eu rodei "npm init -y" e com isso veio o package.json e o node_modules
- Para instalar o Typescript de forma não global, apenas em cada projeto:
    - npm install typescript -D
    - Dá pra ver que foi instalado no package.json em "devDependencies"
- Nesse momento, se eu criar um arquivo index.ts e quiser compilar, eu preciso rodar o comando:
    - npx tsc index.ts

- ARQUIVO DE DESENVOLVIMENTO ---> TS
- ARQUIVO DE PRODUÇÃO ---> JS

- Dois modos de trabalhar com TS:
    1- Module Mode (melhor de se trabalhar e mais comum)
    2- Script Mode (aqui dá muito erro de variável duplicada, mas se exportar a função ou variável já resolve e vira Module Mode)

----------------------------------- Instalação ts-code e Code Runner ---------------------------------------

- Vai me facilitar pra ver as saídas do TS sem ter que ficar compilando e criando um arquivo JS, deixando mais rápido e é só rodar na seta RUN CODE do VS Code.

- Rodar no comando:
    - npm install ts-node -D
    - baixar a extensao Code Runner no VS Code
    - criar pasta .vscode (toda configuração dessa pasta só vai afetar esse projeto)
    - dentro dessa pasta, criar o arquivo settings.json
    - dentro desse arquivo vou criar o comando "code-runner.executorMap" e posso apagar tudo deixando apenas o typescript
    - vou mudar o "typescript": "ts-node" para "typescript": "npx ts-node --files"

------------------------------------------ Instalação ESLint -----------------------------------------------

- Rodar no comando:
    - npm install eslint -D
    - npm i @typescript-eslint/eslint-plugin @typescript-eslint/parser -D (integracao do eslint com TS)
    - Criar o arquivo .eslintrc.js
    - Posso copiar o que tem dentro desse arquivo para os próximos
    - Eu deixei o eslint sem nenhuma regra para não ficar coisa demais, e toda a parte de regras de identação, colocar ponto e virgula, quebra de linha, essas coisas, vou fazer no Prettier e depois importar no arquivo do eslint.

----------------------------------------- Instalação Prettier ----------------------------------------------

- Rodar no comando:
    - npm i prettier eslint-config-prettier eslint-plugin-prettier -D
    - criar o arquivo .prettierrc.js e copiar as regras que eu quero
    - não esquecer de chamar no arquivo eslint, o arquivo do prettier

------------------------------------------- tsconfig.json --------------------------------------------------

Configuração do Typescript mesmo
- Rodar no comando:
    - npx tsc --init (esse comando vai criar o arquivo tsconfig e eu vou configurar algumas coisas la)
    - Habilitar nesse arquivo:
        - "lib": ["ESNext", "DOM"],
        - "outDir": "./dist",
        - "strict": true, (aqui vem true por padrão, mas eu posso deixar true se eu estiver começando um projeto do zero. Se eu pegar um projeto pronto, o ideal é passar pra false pra nao me dar tantos erros)
        - Adicionar isso depois do fechamento de compilerOptions: "include": ["./src"]

------------------------------------------- .editorconfig --------------------------------------------------

- Clicar na raiz do projeto com o botao direito e adicionar .editorconfig
- Copiar as configurações que eu fiz nesse projeto.

----------------------------------------- Considerações extras --------------------------------------------

- TUDO QUE FOR TS, OU SEJA, OS ARQUIVOS DE ENTRADA, ESTARÃO EM SRC.
- QUANDO EU COMPILAR, ELES IRÃO PARA OUTRA PASTA DIST QUE EU CONFIGUREI NO TSCONFIG.JSON
- O COMANDO PARA COMPILAR DE TS PARA JS DEPOIS DE JÁ CONFIGURADO, VAI SER:
    - npx tsc
