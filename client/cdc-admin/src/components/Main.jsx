import React, { Component } from 'react';
import Constantes  from "../Constantes";
import $ from 'jquery';
import ComunicaComServer from "../utils/ComunicaComServer";

export default class Main extends Component {

    constructor() {
        super();
        this.state = {
            formNewUser: {
                nome  : "",
                email : "",
                senha : ""
            },

            lista: [
                { nome: 'Luiz', email: "ahdoahd@dlahsd.com", senha: "1234" },
                { nome: 'Luiz2', email: "2@dlahsd.com", senha: "2222" },
            ]
        };


        // definir o "this" nas funcoes
        this._getAutores    = this._getAutores.bind(this);
        this.setNome        = this.setNome.bind(this);
        this.setEmail       = this.setEmail.bind(this);
        this.setSenha       = this.setSenha.bind(this);
        this.atualizaLista  = this.atualizaLista.bind(this);
        this.enviaForm      = this.enviaForm.bind(this);
        
        
    }
    
    /**
     * Chamado quando o componente foi renderizado pela primira vez
     */
    componentDidMount(){
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

    enviaForm(event){
        // evitar recarregar a pagina
        event.preventDefault();

        // check form
        for (const form of document.querySelectorAll("form")) {
            if(!form.reportValidity()){
                return;
            }
        }

        console.log("Dados sendo enviados");

        // $.ajax({
        //     url: `${Constantes.BASE_URL}/novo_autor`,
        //     contentType: "json",
        //     dataType: "json",
        //     type: "POST",
        //     data: {
        //         nome: "Novo",
        //         email: "Novo",
        //         senha: "Novo"
        //     },
        //     success: (resposta) => {
        //         console.log("Enviado com sucesso");

        //     },
        //     error: (resposta) => {
        //         console.error("Erro em enviaForm", resposta);
        //     }
        // });

        // estava tendo problemas com a API local, por causa do HEADER provavelmente,
        // e como nao sabia configurar certinho, aproveitei essa classe de outro curso da 
        // alura
        ComunicaComServer.post(
            "novo_autor",
            {
                nome  : this.state.formNewUser.nome,
                email : this.state.formNewUser.email,
                senha : this.state.formNewUser.senha
            }
        );
    }

    atualizaLista(event){
        event.preventDefault();

        this._getAutores();
    }

    setNome(evento){
        // get old object
        let formNewUser = this.state.formNewUser;

        // update object
        formNewUser.nome = evento.target.value;

        // update state
        this.setState({formNewUser : formNewUser});

    }

    setEmail(evento){
        // get old object
        let formNewUser = this.state.formNewUser;

        // update object
        formNewUser.email = evento.target.value;

        // update state
        this.setState({formNewUser : formNewUser});

    }

    setSenha(evento){
        // get old object
        let formNewUser = this.state.formNewUser;

        // update object
        formNewUser.senha = evento.target.value;

        // update state
        this.setState({formNewUser : formNewUser});

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
                                <input /* required */ id="nome" type="text" name="nome" value={this.state.formNewUser.nome} onChange={this.setNome}  />
                            </div>
                            <div className="pure-control-group">
                                <label htmlFor="email">Email</label>
                                <input /* required */ id="email" type="email" name="email" value={this.state.formNewUser.email} onChange={this.setEmail} />
                            </div>
                            <div className="pure-control-group">
                                <label htmlFor="senha">Senha</label>
                                <input /* required */ id="senha" type="password" name="senha" value={this.state.formNewUser.senha} onChange={this.setSenha}/>
                            </div>
                            <div className="pure-control-group">
                                <label></label>
                                <button onClick={this.enviaForm} className="pure-button pure-button-primary">Gravar</button>
                                <button onClick={this.atualizaLista} className="pure-button pure-button-primary">Atualizar</button>
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
                                    this.state.lista.map((el, index) => {
                                        return  <tr key={index}>
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