import React, { Component } from 'react';
import './css/App.css';
import "./css/side-menu.css"
import "./css/pure-min.css"
import Menu from './components/Menu';
import Main from './components/Main';


class App extends Component {

    render() {
        return (
            <div className="App">
                <div id="layout">

                    <a href="#menu" id="menuLink" className="menu-link">

                        <span></span>
                    </a>

                    <Menu />
                    <Main />

                </div>
            </div>
        );
    }
}

export default App;
