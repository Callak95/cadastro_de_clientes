# Documentação do Projeto - Teste de Programação Desenvolvedor

## Facilita Jurídico

Este documento fornece informações essenciais sobre o projeto "Teste de Programação Desenvolvedor - Facilita Jurídico". Abaixo estão os detalhes sobre a estrutura do projeto, caminhos de acesso, e as bibliotecas utilizadas tanto no backend (API) quanto no frontend (Cliente).

## Estrutura do Projeto

O projeto é dividido em duas partes principais: a API (backend) e o Cliente (frontend).

### API (Backend)

- **Caminho de Acesso:** `/api`
- **Dependências:**
  - **Desenvolvimento:**
    - `@types/pg`: ^8.10.9
    - `@types/uuid`: ^9.0.7
    - `@typescript-eslint/eslint-plugin`: ^6.19.0
    - `@typescript-eslint/parser`: ^6.19.0
    - `dotenv`: ^16.3.1
    - `eslint`: ^8.56.0
    - `eslint-config-prettier`: ^9.1.0
    - `nodemon`: ^3.0.3
    - `prettier`: ^3.2.4
    - `ts-node`: ^10.9.2
    - `tsc`: ^2.0.4
    - `typescript`: ^5.3.3
    - `vitest`: ^1.2.1
  - **Produção:**
    - `@types/cors`: ^2.8.17
    - `@types/express`: ^4.17.21
    - `@types/node`: ^20.11.5
    - `cors`: ^2.8.5
    - `express`: ^4.18.2
    - `pg`: ^8.11.3
    - `reflect-metadata`: ^0.2.1
    - `tsyringe`: ^4.8.0
    - `uuid`: ^9.0.1

### Cliente (Frontend)

- **Caminho de Acesso:** `/cliente`
- **Dependências:**
  - **Requisitos:**
    - Node.js (versão mínima recomendada): 14.x
    - npm (versão mínima recomendada): 6.x
  - **Produção:**
    - `@reduxjs/toolkit`: ^2.0.1
    - `axios`: ^1.6.5
    - `leaflet`: ^1.9.4
    - `react`: ^18.2.0
    - `react-dom`: ^18.2.0
    - `react-leaflet`: ^4.2.1
    - `react-redux`: ^9.1.0
    - `react-router-dom`: ^6.21.3
    - `redux`: ^5.0.1
    - `styled-components`: ^6.1.8
  - **Desenvolvimento:**
    - `@types/leaflet`: ^1.9.8
    - `@types/react`: ^18.2.43
    - `@types/react-dom`: ^18.2.17
    - `@typescript-eslint/eslint-plugin`: ^6.14.0
    - `@typescript-eslint/parser`: ^6.14.0
    - `@vitejs/plugin-react`: ^4.2.1
    - `eslint`: ^8.55.0
    - `eslint-plugin-react-hooks`: ^4.6.0
    - `eslint-plugin-react-refresh`: ^0.4.5
    - `typescript`: ^5.2.2
    - `vite`: ^5.0.8

## Executando o Projeto

Para executar o projeto, siga as instruções abaixo:

#### API (Backend)

1. Navegue até o diretório `/api`.
2. Execute `npm install` para instalar as dependências.
3. Execute `npm test` para realizar os testes.
4. Execute `npm run build` para realizar o build da aplicação.
5. Execute `npm run dev` para iniciar o servidor em modo de desenvolvimento.

#### Cliente (Frontend)

1. Navegue até o diretório `/cliente`.
2. Execute `npm install` para instalar as dependências.
3. Execute `npm test` para realizar os testes.
4. Execute `npm run build` para realizar o build da aplicação.
5. Execute `npm run dev` para iniciar a aplicação frontend em modo de desenvolvimento.
