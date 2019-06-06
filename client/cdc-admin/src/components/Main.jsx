import React, { Component } from 'react';
import FormAutorBox from './FormAutorBox';

export default class Main extends Component {
    render() {
        return (
            <div id="main">
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