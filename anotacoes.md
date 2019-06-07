# pubsub-js

Instalacao
```sh
npm install pubsub-js
```

Forma de usar
```jsx
import pubSub from 'pubsub-js'; // notifica enventos para quem quiser ouvir. (subscribe pattern)


// ...

// toda vez que um evento chamado atualiza-listagem-autores for publicado, o callback é executado
pubSub.subscribe('atualiza-listagem-autores', (topico, objetoPassado) => {
    this.setState({ lista: objetoPassado });
});

// ...

// publica acao passando um objeto
pubSub.publish('atualiza-listagem-autores', resposta);

```

# Router 

- No curso foi usado a react-router, mas tive problemas em usar. Parece que está depreciado. Para isso tem o react-router-dom

## Usando react Router
instalacao
```sh
npm install react-router --save
```

E no index.js
```jsx
import {Router, Route, browserHistory} from 'react-router';

// ...

ReactDOM.render(
  <Router history={browserHistory}>
      <Route path="/"      component={App}   />
      <Route path="/Autor" component={Autor} />
      <Route path="/Livro" component={Livro} />
  </Router>,
  document.getElementById('root')
);

```

## Usando react router DOM

(Precisa do react router tbm)

instalacao
```sh
npm install react-router --save
npm install react-router-dom --save
```

```jsx
import {BrowserRouter, Route } from 'react-router-dom';
// Switch se precisar

// ...

<BrowserRouter>
  <Route path="/">
    {//note quem em app, nos temos que acessar this.props.children}
    <App >
      <Switch>
        <Route path="/" component={Main} exact={true} />
        <Route path="/main" component={Main} exact={true} />
        <Route path="/Autor" component={Autor} />
        <Route path="/Livro" component={Livro} />
        <Route component={NotFound} />
      </Switch>
    </App>
  </Route>
</BrowserRouter>
);

// e nas paginas, em vez de usar <a href=/link/> link </a>

import {Link} from 'react-router-dom';

<Link to="/link"> link </Link>
```