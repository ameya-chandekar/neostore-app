import React from 'react';
import './App.css';
import HomePage from './js/components/homepage/homePage'
import LoginPage from './js/components/login/loginPage'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import RegisterPage from './js/components/Register/registerPage';
import AllProducts from './js/components/Products/ProductsModule';
import locateUs from './js/components/footer/locateUs/locateUs';
function App() {
    return (
        <Router>


            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/LoginPage" component={LoginPage} />
                <Route exact path="/RegisterPage" component={RegisterPage} />
                <Route exact path="/Products" component={AllProducts} />
                <Route exact path="/LocateUs" component={locateUs}/>
            </Switch>


        </Router>

    );
}

export default App;