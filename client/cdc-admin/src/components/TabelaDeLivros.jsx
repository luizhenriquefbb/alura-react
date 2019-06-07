import React, { Component } from 'react';

export default class TabelaDeLivros extends Component {
    render() {
        return (
            <div>
                <table className="pure-table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Autor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.lista.map((el, index) => {
                                return <tr key={index}>
                                    <td>{el.nome}</td>
                                    <td>{el.autor}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

