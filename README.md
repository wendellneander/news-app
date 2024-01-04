# Projeto "The News"

O projeto "The News" é um aplicativo de jornal simples desenvolvido para permitir a criação, edição, atualização e exclusão de artigos.

## Estrutura do Projeto

O projeto é organizado em três containers Docker:

### Containers

1. **Database (MySQL):** Responsável por armazenar os dados do aplicativo, incluindo artigos e categorias.
2. **Web (React):** Interface do usuário desenvolvida em React usando Vite como bundler para construção rápida.
3. **API (Node.js):** Backend da aplicação desenvolvido em Node.js com Express, lidando com lógica de negócios, interação com o banco de dados e fornecendo endpoints para operações CRUD de artigos e categorias.

### Tecnologias Utilizadas

- **Node.js:** Utilizado para o backend da aplicação, gerenciamento de servidores e lógica de negócios.
- **Prisma:** Utilizado como ORM (Object-Relational Mapping) para interagir com o banco de dados MySQL.
- **MySQL:** Banco de dados relacional utilizado para armazenar artigos e informações sobre categorias.
- **React:** Biblioteca JavaScript para construir a interface do usuário.
- **Express:** Framework web para Node.js usado na construção da API.
- **Vite:** Bundler moderno para React, proporcionando uma experiência de desenvolvimento ágil.

## Funcionalidades

O aplicativo "The News" oferece as seguintes funcionalidades:

- **CRUD de Artigos:** Os usuários podem criar, ler, atualizar e excluir artigos. As operações de CRUD são manipuladas pela API e refletem-se na interface do usuário.
- **Listagem de Categorias:** Os usuários podem visualizar as categorias disponíveis para os artigos, permitindo uma melhor organização e filtragem dos artigos exibidos.

## Endpoints da API

- **POST /article:** Cria um artigo.
- **PATCH /article/:slug:** Atualiza um artigo.
- **DELETE /article/:slug:** Exclui um artigo.
- **GET /article/:slug:** Lê um artigo.
- **GET /articles:** Lista artigos.

## Acesso às Aplicações

- **API:** A API está disponível em [http://localhost:3001](http://localhost:3001).
- **App React:** O aplicativo React está disponível em [http://localhost:3000](http://localhost:3000).

## Executando o Projeto

Para executar o projeto, use o seguinte comando no terminal:

```bash
docker-compose up
```


### Notas Adicionais
Este projeto é uma implementação simples de um aplicativo de jornal, com foco nas operações CRUD de artigos e categorias. A segurança, validação de dados e outros recursos podem ser estendidos para uma aplicação mais robusta em um ambiente de produção.
As tecnologias selecionadas foram escolhidas pela facilidade de desenvolvimento, desempenho e flexibilidade oferecidas para construir e manter a aplicação de forma eficiente.