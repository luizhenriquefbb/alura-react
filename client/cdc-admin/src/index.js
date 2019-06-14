import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Main from './components/Main';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Autor from './components/cadastroAutor/Autor';
import Livro from './components/cadastroLivro/Livro';
import NotFound from './components/NotFound';

ReactDOM.render(

  <BrowserRouter>
    <Route path="/">
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


  , document.getElementById('root')
);
