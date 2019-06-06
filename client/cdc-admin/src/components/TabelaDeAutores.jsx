import React, { Component } from 'react';

export default class TabelaDeAutores extends Component {
    render() {
        return (
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
                            this.props.lista.map((el, index) => {
                                return <tr key={index}>
                                    <td>{el.nome}</td>
                                    <td>{el.email}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

