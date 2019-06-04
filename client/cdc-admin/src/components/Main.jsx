import React, { Component } from 'react';
import Constantes  from "../Constantes";
import $ from 'jquery';

export default class Main extends Component {

    constructor() {
        super();
        this.state = {
            lista: [
                { nome: 'Luiz', email: "ahdoahd@dlahsd.com", senha: "1234" },
                { nome: 'Luiz2', email: "2@dlahsd.com", senha: "2222" },
            ]
        };
    }
    
    /**
     * Chamado quando o componente foi renderizado pela primira vez
     */
    componentWillMount(){
        this._getAutores()
    }

    _getAutores() {
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

    render() {
        return (
            <div id="main">
                <div className="header">
                    <h1>Cadastro de Autores</h1>
                </div>
                <div className="content" id="content">
                    <div className="pure-form pure-form-aligned">
                        <form className="pure-form pure-form-aligned">
                            <div className="pure-control-group">
                                <label htmlFor="nome">Nome</label>
                                <input id="nome" type="text" name="nome" value="" />
                            </div>
                            <div className="pure-control-group">
                                <label htmlFor="email">Email</label>
                                <input id="email" type="email" name="email" value="" />
                            </div>
                            <div className="pure-control-group">
                                <label htmlFor="senha">Senha</label>
                                <input id="senha" type="password" name="senha" />
                            </div>
                            <div className="pure-control-group">
                                <label></label>
                                <button type="submit" className="pure-button pure-button-primary">Gravar</button>
                            </div>
                        </form>

                    </div>
                    <div>
                        <table className="pure-table">
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.lista.map(el => {
                                        return  <tr>
                                                    <td>{el.nome}</td>
                                                    <td>{el.email}</td>
                                                </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}   