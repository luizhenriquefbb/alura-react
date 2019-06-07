import React, { Component } from 'react';
import InputCustomizado from "./InputCustomizado";
import BotoaoCustomizado from './BotaoCustomizado';
import ComunicaComServer from "../utils/ComunicaComServer";


export default class FormularioUsuario extends Component {
    constructor(){
        super();
        this.state = {
            formLivro: {
                nome  : "",
                autor : "",
            }
        }
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
                    <InputCustomizado label="Autor" id="autor" type="Text" name="nome" value={this.state.formLivro.autor} onChange={evt => this.setAutor(evt)} is_required={true} />
                    <div className="pure-control-group">
                        <BotoaoCustomizado onClick={evt => this.enviaForm(evt)} label="Gravar" />
                    </div>

                </form>

            </div>
        );
    }
}   