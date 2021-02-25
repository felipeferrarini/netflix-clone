# Info :information_source:

Projeto criado durante o bootcamp "Avanade Angular Developer" na [Digital Innovation One.][https://digitalinnovation.one/]

## Projeto Proposto :page_facing_up:

Recrie a interface do principal site de streaming mundial utilizando tecnologias simples como HTML5, CSS3 e JavaScript. Nesse projeto você aprenderá: como estruturar um layout, técnicas de CSS3 com containers e variáveis, como posicionar os elementos com Flexbox e como utilizar plugins Jquery a favor da sua aplicação.



## Solução criada :man_technologist:

O projeto foi realizado utilizando o [ReactJs][https://pt-br.reactjs.org/], uma biblioteca JavaScript para criar interfaces de usuário de forma mais produtiva.

No projeto também foi utilizado Typescript, [styled components][https://styled-components.com/], [react-icons][https://react-icons.github.io/react-icons/] e a biblioteca [react-alice-carousel][https://www.npmjs.com/package/react-alice-carousel] para o carousel de filmes.



## Vercel App :earth_americas:

O deploy do projeto foi feito na [Vercel][https://vercel.com] e pode ser acessado pelo [link][https://netflix-clone-gray.vercel.app].



## The Movie DB API :computer:

Para criar uma experiência mais próxima do site real, foi utilizado uma API do site [The Movie DB API][https://www.themoviedb.org/]. Caso queira clonar este projeto, para utilizar a API basta criar uma conta no site e seguir o passo a passo neste [link][https://www.themoviedb.org/documentation/api] e , após conseguir sua API KEY (v3 auth), criar um arquivo chamado `.env.local` no diretorio principal do projeto, com a seguinte estrutura:

`REACT_APP_MOVIE_DB_API_KEY=****cole sua API KEY aqui****`



## Comandos disponíveis (rode na raiz do projeto) :scroll:

### `yarn`

Instala todas as dependências necessarias para rodar a aplicação.

### `yarn start`

Inicia a aplicação no modo de desenvolvimento.<br />

Abra [http://localhost:3000](http://localhost:3000) para ver no seu browser.



A página vai recarregar automaticamente a cada alteração feita.<br />

### `yarn build`

Cria a versão de produção da sua aplicação.

Veja mais informações no [link][https://facebook.github.io/create-react-app/docs/deployment]
