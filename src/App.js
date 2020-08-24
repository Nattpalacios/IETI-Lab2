import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import {Login} from "./components/loginComponent/Login";
import {TodoApp} from "./components/todoComponent/TodoApp";

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {isLoggedIn:false};
    }

    render() {

        const LoginView = () => (
            <Login />
        );
      
        const TodoAppView = () => (
            <TodoApp />
        );

        const isLoggedIn = this.state.isLoggedIn;
        let choose;

        if(isLoggedIn){
            choose = (
                <div>
                    <ul>
                        <li><Link to="/todo">Todo</Link></li>
                    </ul>
                    <div>
                        <Route path="/todo" component={TodoAppView}/>
                    </div>
                </div>
            );
        } else {
            choose = (
                <div>
                    <ul>
                        <li><Link to="/">Login</Link></li>
                    </ul>
                    <div>
                        <Route exact path="/" component={LoginView}/>
                    </div>
                </div>
            );
        }

        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">TODO React App</h1>
                    </header>

                    <br/>
                    <br/>
                    {choose}
                </div>
            </Router>
        );

    }

}