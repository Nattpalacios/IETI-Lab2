import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import {Login} from "./components/loginComponent/Login";
import {TodoApp} from "./components/todoComponent/TodoApp";
import 'react-datepicker/dist/react-datepicker.css';

export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {isLoggedIn : false}
        this.handleSignIn = this.handleSignIn.bind(this);
        localStorage.setItem('email', "natalia@email.com");
        localStorage.setItem('password', "1234");
        if(!localStorage.getItem("isLoggedIn")) {
            localStorage.setItem("isLoggedIn", this.state.isLoggedIn);
        }
    }

    handleSignIn() {
        this.setState({isLoggedIn:true})
    }

    render() {

        const LoginView = () => (
            <Login handleSignIn = {this.handleSignIn}/>
        );
      
        const TodoAppView = () => (
            <TodoApp />
        );

        const isLoggedIn = this.state.isLoggedIn || (localStorage.getItem("isLoggedIn") == "true");
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