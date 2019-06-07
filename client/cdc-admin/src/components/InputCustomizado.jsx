import React, { Component } from 'react';
export default class InputCustomizado extends Component {

    constructor(){
        super();
        this.state = {
        }
    }

    getInput(){
        if(this.props.is_required){
            return <input required id={this.props.id} type={this.props.type} name={this.props.name} value={this.props.value} onChange={this.props.onChange}  />
        }
        else{
            return <input id={this.props.id} type={this.props.type} name={this.props.name} value={this.props.value} onChange={this.props.onChange}  />
        }
        
    }

    render() {
        return (
            <div className="pure-control-group">
                <label htmlFor={this.props.name}>{this.props.label}</label>
                {this.getInput()}
            </div>
        );
    }
}