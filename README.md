# Marvel App

Este é um projeto desenvolvido com [Next.js](https://nextjs.org/), [React](https://react.dev/) e [TypeScript](https://www.typescriptlang.org/), inicializado com [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Iniciando

Este projeto utiliza NPM como gerenciador de pacotes. Inicie instalando as dependências:

```bash
npm i
```

Para executar o projeto localmente:

```bash
npm run dev
```

Para build do projeto:

```bash
npm run build
```

Para executar o build do projeto:

```bash
npm run build && npm run start
```

Abra [http://localhost:3000](http://localhost:3000) em seu navegador para visualizar a aplicação em execução.

Este projeto utiliza [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) para otimizar o carregamento da fonte Roboto.

## Estrutura do projeto

O projeto consiste em duas principais frentes, Home e Perfil do Personagem.
Foi utilizado CSS Modules para estilos.
Para guiar, abaixo algumas informações sobre a estrutura básica do projeto:

```
src
├───api
├───app
│   ├───character-profile
│   │   └───page (perfil)
│   ├───page (home)
│   ├───layout
│   ├───not-found
│   ├───error
│   └───home-styles
├───assets
│   ├───icons
│   └───images
├───components
│   ├───characters-section
│   └───profile-section
├───context
├───styles (globals.css)
├───types
└───utils
```

## Saiba Mais

Para saber mais sobre o Next.js, dê uma olhada a seguir:

- [Next.js Documentation](https://nextjs.org/docs) - aprender sobre Next.js recursos e API.
- [Learn Next.js](https://nextjs.org/learn) - um tutorial interativo Next.js.