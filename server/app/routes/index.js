/* Código simplório, apenas para fornecer o serviço para a aplicação */

var api = require('../api');

module.exports  = function(app) {
    
    app.route('/api/autores')
        .get(api.autores);
        
    app.route('/api/novo_autor')
        .post(api.cadastrarAutor);

    app.route('/api/livros')
        .get(api.livros);
        
    app.route('/api/novo_livro')
        .post(api.cadastrarLivro);
};