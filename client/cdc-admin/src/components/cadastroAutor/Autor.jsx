import React, { Component } from 'react';
import FormAutorBox from './FormAutorBox';
export default class Autor extends Component {

    render() {
        return (
            <div className="">
                <div className="header">
                    <h1>Cadastro de Autores</h1>
                </div>
                <div className="content" id="content">
                    <FormAutorBox />
                </div>
            </div>
        );
    }
}   