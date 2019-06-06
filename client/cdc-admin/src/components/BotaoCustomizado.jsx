import React, { Component } from 'react';
export default class BotoaoCustomizado extends Component {

    render() {
        return (
            <button onClick={this.props.onClick} className="pure-button pure-button-primary">{this.props.label}</button>
        );
    }
}   