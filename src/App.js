import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    state = {
        items: [],
        pages: undefined,
        total: undefined,
    };
    componentDidMount() {
        fetch('/jobs?page=1&pageSize=2')
            .then(r => r.json())
            .then(r => this.setState(r));
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
                <p className="App-intro">
                    Please us the /jobs api (example call in componentDidMount) to implement a paginated list
                    <pre>{JSON.stringify(this.state, undefined, 2)}</pre>
                </p>
            </div>
        );
    }
}

export default App;
