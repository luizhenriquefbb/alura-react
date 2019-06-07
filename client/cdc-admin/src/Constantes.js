const Constantes = {
        // "BASE_URL": "http://cdc-react.herokuapp.com/api"
        "BASE_URL": "http://localhost:8080/api",
        canalPublisJs: {
                atualiza_listagem_autores: "atualiza-listagem-autores"
        }
}

// export default Constantes ;
module.exports = {
        BASE_URL: Constantes.BASE_URL,
        canalPublisJs: Constantes.canalPublisJs
}