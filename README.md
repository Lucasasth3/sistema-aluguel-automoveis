# Sistema Web de Aluguel de Automóveis

Projeto acadêmico de gestão de pedidos de aluguel de automóveis.

## Estado atual

Servidor Express e página inicial em EJS. A conexão com MongoDB e as funcionalidades de cadastro ainda não foram implementadas.

## Estrutura

```text
src/
  config/
  controllers/
  models/
  routes/
  views/
public/
  css/
  js/
docs/
  uml/
```

## Documentação

- [Requisitos](docs/requisitos.md)
- [Histórias de usuário](docs/historias-usuario.md)

## Diagramas — Sprint 1

- [Casos de uso](docs/uml/sprint-1/casos-de-uso.png)
- [Classes](docs/uml/sprint-1/classes.png)
- [Pacotes](docs/uml/sprint-1/pacotes.png)

## Executar localmente

Instale as dependências e inicie o servidor:

```bash
npm ci
npm run dev
```

Acesse http://localhost:3000. Para executar sem reinício automático, use `npm start`.
