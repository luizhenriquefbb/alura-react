import React, { Component } from 'react';
import FormularioLivro from "./FormularioLivro";
import TabelaDeLivros from './TabelaDeLivros';
import Constantes from "../Constantes";
import $ from 'jquery';
export default class FormLivroBox extends Component {

    constructor() {
        super();

        this.state = {
            lista: []
        }
    }
    /**
     * Chamado quando o componente foi renderizado pela primira vez
     */
    componentDidMount() {
        this.getLivros()
    }

    getLivros() {
        console.log("Consultando", `${Constantes.BASE_URL}/livros`);
        $.ajax({
            url: `${Constantes.BASE_URL}/livros`,
            dataType: "json",
            success: (resposta) => {
                this.addLivros(resposta);
            },
            error: (resposta) => {
                console.error("Erro em _getlivros", resposta);
                this.setState({ lista: [] });
            }
        })


    }

    addLivros(livros){
        this.setState({lista:livros});
    }

    render() {
        return (
            <div className="">
                <FormularioLivro adicionarAutor={(livros)=>this.addLivros(livros)} />
                <TabelaDeLivros lista={this.state.lista} />
            </div>
        );
    }
}   