/* Código simplório, apenas para fornecer o serviço para a aplicação */
var api = {}

var listaDeAutores = [
    { nome: 'Luiz',                           email: "ahdoahd@dlahsd.com", senha: "1234" },
    { nome: 'Luiz2',                          email: "2@dlahsd.com",       senha: "23424" },
    { nome: 'Fulano',                         email: "2@dlahsd.com",       senha: "sdfsdf" },
    { nome: 'Alura React',                    email: "2@dlahsd.com",       senha: "asdasdad" },
    { nome: 'Olha como foi simples resolver', email: "2@dlahsd.com",       senha: "er werw" },
];

var listaDeLivros = [
    {nome : "React para meros mortais", autor: "Luiz"}
]

api.autores = function(req, res) {
    res.json(listaDeAutores);
};

api.cadastrarAutor = function(req, res) {

   console.log(req.body);
   listaDeAutores.push(req.body);
   res.status(200).json(listaDeAutores);
};

api.livros = function(req,res) {
    res.json(listaDeLivros);
}

api.cadastrarLivro = function(req, res) {

    console.log(req.body);
    listaDeLivros.push(req.body);
    res.status(200).json(listaDeLivros);
 };


module.exports = api;