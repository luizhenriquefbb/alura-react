import React, { Component } from 'react';
import Formulario from './Formulario';
import TabelaDeAutores from './TabelaDeAutores';
import Constantes from "../Constantes";
import $ from 'jquery';

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
                this.setState({ lista: resposta });
            },
            error: (resposta) => {
                console.error("Erro em _getAutores", resposta);
                this.setState({ lista: [] });
            }
        })
    }

    atualizarListagem(novaLista){
        this.setState({ lista: novaLista });
    }

    render() {
        return (
            <div className="">
                <Formulario atualizarListagem={(novaLista) => this.atualizarListagem(novaLista)}/>
                <TabelaDeAutores lista={this.state.lista} />
            </div>
        );
    }
}   