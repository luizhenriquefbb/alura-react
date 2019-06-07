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