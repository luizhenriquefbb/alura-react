import React, { Component } from 'react';
import FormularioUsuario from './FormularioAutor';
import TabelaDeAutores from './TabelaDeAutores';
import Constantes from "../../Constantes";
import $ from 'jquery';
import pubSub from 'pubsub-js'; // notifica enventos para quem quiser ouvir. (subscribe pattern)

export default class FormAutorBox extends Component {

    constructor() {
        super();
        this.state = {
            lista: []
        };
    }

    /**
     * Chamado quando o componente foi renderizado pela primira vez
     */
    componentDidMount() {
        this.getAutores()
    }

    getAutores() {
        console.log("Consultando", `${Constantes.BASE_URL}/autores`);
        $.ajax({
            url: `${Constantes.BASE_URL}/autores`,
            dataType: "json",
            success: (resposta) => {
                pubSub.publish(Constantes.canalPublisJs.atualiza_listagem_autores, resposta);
            },
            error: (resposta) => {
                console.error("Erro em _getAutores", resposta);
                this.setState({ lista: [] });
            }
        })

        // toda vez que um evento chamado atualiza-listagem-autores for publicado, o callback é executado
        pubSub.subscribe(Constantes.canalPublisJs.atualiza_listagem_autores, (topico, objetoPassado) => {
            this.setState({ lista: objetoPassado });
        });

    }

    render() {
        return (
            <div className="">
                <FormularioUsuario />
                <TabelaDeAutores lista={this.state.lista} />
            </div>
        );
    }
}   