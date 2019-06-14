import React, { Component } from 'react';
import InputCustomizado from "../InputCustomizado";
import BotoaoCustomizado from '../BotaoCustomizado';
import ComunicaComServer from "../../utils/ComunicaComServer";
import { BASE_URL } from "../../Constantes";
import $ from 'jquery';


export default class FormularioUsuario extends Component {
    constructor(){
        super();
        this.state = {
            formLivro: {
                nome  : "",
                autor : "",
                autores:[]
            }
        }
    }

     /**
     * Chamado quando o componente foi renderizado pela primira vez
     */
    componentDidMount() {
        this.getAutores()
    }

    getAutores() {
        console.log("Consultando", `${BASE_URL}/autores`);
        $.ajax({
            url: `${BASE_URL}/autores`,
            dataType: "json",
            success: (resposta) => {
                const formLivro = this.state.formLivro;
                formLivro.autores = resposta;
                this.setState({ formLivro : formLivro });
            },
            error: (resposta) => {
                console.error("Erro em _getAutores", resposta);
            }
        })

     

    }



    setNome(evento){
        // get old object
        let formNewUser = this.state.formLivro;

        // update object
        formNewUser.nome = evento.target.value;

        // update state
        this.setState({formNewUser : formNewUser});

    }

    setAutor(evento){
        // get old object
        let formNewUser = this.state.formLivro;

        // update object
        formNewUser.autor = evento.target.value;

        // update state
        this.setState({formNewUser : formNewUser});

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

        ComunicaComServer.post(
            "novo_livro",
            {
                nome   : this.state.formLivro.nome,
                autor  : this.state.formLivro.autor

            }
        ).then(response => {
            console.log(response)
            this.props.adicionarAutor(response.response);

            // limpar form
            this.clearForm();

        }).catch(response => {
            console.warn(response.msg);
        });
    }

    clearForm() {
        this.setState({
            formNewUser: {
                nome: "",
                autor:""
            }
        })

    }

    render() {
        return (
            <div className="pure-form pure-form-aligned">
                <form className="pure-form pure-form-aligned">

                    <InputCustomizado label="Nome" id="nome" type="Text" name="nome" value={this.state.formLivro.nome} onChange={evt => this.setNome(evt)} is_required={true} />
                    Autor: <select name="" id="" onChange={evt => this.setAutor(evt)} required>
                        {this.state.formLivro.autores.map((autor, index) => {
                            return <option key={index} value={autor.nome}>{autor.nome}</option>
                        })}
                    </select>
                    <br/>
                    <div className="pure-control-group">
                        <BotoaoCustomizado onClick={evt => this.enviaForm(evt)} label="Gravar" />
                    </div>

                </form>

            </div>
        );
    }
}   