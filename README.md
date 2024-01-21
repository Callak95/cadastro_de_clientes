# Documentação do Projeto - Teste de Programação Desenvolvedor

## Facilita Jurídico

Este documento fornece informações essenciais sobre o projeto "Teste de Programação Desenvolvedor - Facilita Jurídico". Abaixo estão os detalhes sobre a estrutura do projeto, caminhos de acesso, e as bibliotecas utilizadas tanto no backend (API) quanto no frontend (Cliente).

## Estrutura do Projeto

O projeto é dividido em duas partes principais: a API (backend) e o Cliente (frontend).

### API (Backend)

- **Caminho de Acesso:** `/api`
- **Dependências:**
  - **Desenvolvimento:**
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
    - `cors`: ^2.8.5
    - `express`: ^4.18.2
    - `pg`: ^8.11.3
    - `reflect-metadata`: ^0.2.1
    - `tsyringe`: ^4.8.0
    - `uuid`: ^9.0.1

### Comandos para Teste, Build e Desenvolvimento

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
