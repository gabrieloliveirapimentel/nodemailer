# Nodemailer

Este projeto é um projeto para fazer o envio de e-mail com a biblioteca ``nodemailer``.

## Pré-requisitos

Esse projeto foi criado com as seguintes ferramentas e versões:
- [Node.js](https://nodejs.org/) (versão 18.19.1)
- [npm](https://www.npmjs.com/) (versão 10.2.4)

## Bibliotecas utilizadas

Esse projeto foi construído com as seguintes bibliotecas:
- ``@fastify/cors``
- ``dotenv``
- ``fastify``
- ``nodemailer``

Além disso, para os testes, utilizou-se um e-mail gerado pelo [Ethereal](https://ethereal.email/). Através dele tem-se as configurações necessária para inserir no ``.env``. 

**Observação:** Os e-mails não chegam para o e-mail de destino inserido, apenas para a caixa de e-mails do e-mail gerado pelo Ethereal.

## Instalação

Siga os passos abaixo para configurar o projeto:

**Clone o repositório:**

```bash    
git clone https://github.com/gabrieloliveirapimentel/nodemailer.git
cd nodemailer
```

**Instale as dependências:**
Usando npm:
```bash
npm install
```

Ou usando yarn:
```bash
yarn
```

**Inicie o servidor de desenvolvimento:**
Usando npm:
```bash
npm run dev
```

Ou usando yarn:
```bash
yarn dev
```

**Acesse a API:**
Acesse o endpoint inicial em [http://localhost:3003](http://localhost:3003).

## Fazer a requisição de e-mail
Para fazer o envio de e-mail, pode-se utilizar o Postman e fazer uma requisição ``POST`` para ``http://localhost:3003/send`` com o body:
```json
{
    "email": "email@gmail.com",
    "subject": "Assunto do e-mail",
    "message": "Mensagem do e-mail de teste para enviar"
}
```

## Estrutura do Projeto

```bash
- src/: Contém os arquivos principais do projeto.
    -- controllers/: Controladores para gerenciar as requisições.
    --- mailController.ts: Controlador do envio de e-mail.
    server.ts: Ponto de entrada da aplicação.
```

## Referências
- [Documentação do Fastify](https://www.fastify.io/)
- [Documentação do TypeScript](https://www.typescriptlang.org/)  