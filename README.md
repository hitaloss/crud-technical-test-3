# 📘 Documentação - CRUD Technical Test 3

## Sumário

- [📘 Documentação - CRUD Technical Test 3](#-documentação---crud-technical-test-3)
  - [Sumário](#sumário)
  - [1. Sobre](#1-sobre)
  - [2. Instalando Dependências](#2-instalando-dependências)
  - [3. Variáveis de Ambiente](#3-variáveis-de-ambiente)
  - [4. Aplicando Migrações](#4-aplicando-migrações)
  - [5. Executando a Aplicação](#5-executando-a-aplicação)
  - [6. Testando com Insomnia](#6-testando-com-insomnia)

---

## 1. Sobre

Este projeto é um back-end desenvolvido com Node.js, Express e TypeScript, utilizando o TypeORM para interagir com um banco de dados PostgreSQL. Ele implementa operações CRUD para gerenciar entidades específicas.

Tecnologias utilizadas:

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeORM](https://typeorm.io/)

---

## 2. Instalando Dependências

Antes de começar, certifique-se de ter o PostgreSQL instalado em sua máquina.

Clone o repositório e navegue até o diretório do back-end:

```bash
git clone https://github.com/hitaloss/crud-technical-test-3.git
cd crud-technical-test-3/back-end
```

Instale as dependências utilizando o Yarn:

```bash
yarn install
```

> **Nota:** Este projeto utiliza o Yarn como gerenciador de pacotes. Caso não o tenha instalado, você pode instalá-lo globalmente com:

```bash
npm install --global yarn
```

---

## 3. Variáveis de Ambiente

Crie um arquivo `.env` na raiz do diretório `back-end`, baseado no arquivo de exemplo `.env.example`:

```bash
cp .env.example .env
```

Edite o arquivo `.env` com as suas configurações do PostgreSQL:

```env
POSTGRES_USER=seu_usuario
POSTGRES_PWD=sua_senha
POSTGRES_DB=nome_do_banco
SECRET_KEY=sua_chave_secreta (pode ser qualquer string aleatória, como "mySecretKey")
```

Certifique-se de que o banco de dados especificado já exista no PostgreSQL.

Caso não exista, o mesmo poderá ser criado com o seguinte comando:

```powershell
CREATE DATABASE recipes_crud;
```

---

## 4. Aplicando Migrações

Antes de aplicar as migrações, será necessário criá-las na pasta `src/migrations`.

```bash
yarn typeorm migration:create src/migrations/initialMigration
```

Para gerar uma nova migração baseada nas entidades atuais:

```bash
yarn typeorm migration:generate src/migrations/InitialMigration -d src/data-source.ts
```

Em seguida, aplique as migrações ao banco de dados:

```bash
yarn typeorm migration:run -d src/data-source.ts
```

---

## 5. Executando a Aplicação

Após configurar as variáveis de ambiente e aplicar as migrações, inicie o servidor de desenvolvimento:

```bash
yarn dev
```

A aplicação estará disponível em: [http://localhost:3000](http://localhost:3000)

---

## 6. Testando com Insomnia

Para testar a API localmente, siga os passos abaixo:

1. **Inicie a aplicação** com:

   ```bash
   yarn dev
   ```

2. **Importe o arquivo `.json` de requisições do Insomnia** (fornecido junto ao projeto ou criado manualmente).
3. **Realize os testes pelo Insomnia**, começando pelos endpoints de `POST /users` e `POST /login` para criar um usuário e obter um token JWT.
4. **Utilize o token JWT** retornado no login para autenticar requisições nas rotas protegidas (via header `Authorization: Bearer <token>`).
5. **Salve os `ids` retornados nas respostas** de criação de usuários ou receitas. Eles serão necessários para executar ações como `PATCH` e `DELETE`.

> ⚠️ Atenção: As rotas de atualização e exclusão exigem que você informe o `id` correto da entidade e também esteja autenticado com um token válido.

---
