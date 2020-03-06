import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './js/components/homepage/homePage'
import LoginPage from './js/components/login/loginPage'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
function App() {
    return (
        <Router>
            

            <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/LoginPage" component={LoginPage} />

                

            </Switch>


      </Router>

    );
}

export default App;