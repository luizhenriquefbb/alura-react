import React, { Component } from 'react';
import InputCustomizado from "../InputCustomizado";
import BotoaoCustomizado from '../BotaoCustomizado';
import ComunicaComServer from "../../utils/ComunicaComServer";
import pubSub from 'pubsub-js'; // notifica enventos para quem quiser ouvir. (subscribe pattern)
import {canalPublisJs} from '../../Constantes'


export default class FormularioAutor extends Component {
    constructor(){
        super();
        this.state = {
            formNewUser: {
                nome  : "",
                email : "",
                senha : ""
            }
        }
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

        // O ajax do jquery tava dando problema com a minha API.
        // Provavelmente o problema eh no HEADER, mas como eu nao sei configurar, eu aproveitei essa classe de outro curso daqui da
        // ALURA
        ComunicaComServer.post(
            "novo_autor",
            {
                nome  : this.state.formNewUser.nome,
                email : this.state.formNewUser.email,
                senha : this.state.formNewUser.senha
            }
        ).then(response => {
            console.log(response)
            // this.props.atualizarListagem(response.response);
            pubSub.publish(canalPublisJs.atualiza_listagem_autores, response.response);

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
                email: "",
                senha: ""
            }
        })

    }

    render() {
        return (
            <div className="pure-form pure-form-aligned">
                <form className="pure-form pure-form-aligned">

                    <InputCustomizado label="Nome" id="nome" type="Text" name="nome" value={this.state.formNewUser.nome} onChange={evt => this.setNome(evt)} is_required={true} />
                    <InputCustomizado label="Email" id="email" type="email" name="email" value={this.state.formNewUser.email} onChange={evt => this.setEmail(evt)} is_required={true} />
                    <InputCustomizado label="Senha" id="senha" type="password" name="senha" value={this.state.formNewUser.senha} onChange={evt => this.setSenha(evt)} is_required={true} />

                    <div className="pure-control-group">
                        <BotoaoCustomizado onClick={evt => this.enviaForm(evt)} label="Gravar" />

                    </div>

                </form>

            </div>
        );
    }
}   