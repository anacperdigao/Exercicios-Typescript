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



----------------------------------------- Instalação Prettier ----------------------------------------------



------------------------------------------- tsconfig.json --------------------------------------------------



------------------------------------------- .editorconfig --------------------------------------------------