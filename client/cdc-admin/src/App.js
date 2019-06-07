import React, { Component } from 'react';
import './css/App.css';
import "./css/side-menu.css"
import "./css/pure-min.css"
import Menu from './components/Menu';


class App extends Component {

    render() {
        return (
            <div className="App">
                <div id="layout">
                    <Menu />
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default App;
