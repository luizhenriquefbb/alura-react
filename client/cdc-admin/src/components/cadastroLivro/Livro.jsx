import React, { Component } from 'react';
import FormLivroBox from './FormLivroBox';
export default class Livro extends Component {

    render() {
        return (
            <div className="">
                <h1>Cadastro de livros</h1>
                <FormLivroBox />
            </div>
        );
    }
}   