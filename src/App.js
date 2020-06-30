import React from 'react';
import './App.css';
import HomePage from './js/components/homepage/homePage'
import LoginPage from './js/components/login/loginPage'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import RegisterPage from './js/components/Register/registerPage';
import AllProducts from './js/components/Products/ProductsModule';
import ContactUs from './js/components/footer/contactUs/contactUs'
import locateUs from './js/components/footer/locateUs/locateUs';
import Subscribe from './js/screens/subscribe';
import Cart from './js/components/cart/cart'
import ProductDetails from './js/components/Products/productdetails/productDetails';
import UserProfile from './js/components/usersection/userProfile/userProfile'
import  Addnewaddress  from './js/components/usersection/address/addnewaddress';
import  ShowAddress  from './js/components/usersection/address/showAddress';
import UserOrders from './js/components/usersection/userOrders'
import UserAddress from './js/components/usersection/userAddress/userAddress'
import UserChangePassword from './js/components/usersection/changepassword/userChangePassword'
import EditProfileDetails from'./js/components/usersection/profiledetails/editProfileDetails'
// import DeliveryAddress from'./js/components/cart/deliveryAddress'
import RecoverPassword from'./js/components/login/recoverPassword'
import ForgotPassword from './js/components/login/forgotPassword'
import SelectAddress from './js/components/selectAddress/selectAddress'
import ThankYou from './js/components/selectAddress/thankYou'
import EditAddress from './js/components/usersection/editAddress'
function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/LoginPage" component={LoginPage} />
                <Route exact path="/RegisterPage" component={RegisterPage} />
                <Route exact path="/Products" component={AllProducts} />
                <Route exact path="/LocateUs" component={locateUs}/>
                <Route exact path="/ContactUs" component={ContactUs}/>
                <Route exact path="/Subscribe" component={Subscribe}/>
                <Route exact path="/Cart" component={Cart}/>
                {/* <Route exact path="/deliveryAddress" component={DeliveryAddress}/> */}
                <Route exact path="/ProductDetails" component={ProductDetails}/>
                <Route exact path="/UserProfile" component={UserProfile}/>
                <Route exact path="/editProfile" component={EditProfileDetails}/>
                <Route exact path="/recoverPassword" component={RecoverPassword}/> 
                <Route exact path="/forgotPassword" component={ForgotPassword}/> 
                <Route exact path="/UserOrders" component={UserOrders}/>
                <Route exact path="/UserAddress" component={UserAddress}/>
                <Route exact path="/UserChangePassword" component={UserChangePassword}/>  
                <Route exact path="/addAddress" component={Addnewaddress}/>
                <Route exact path ="/selectAddress" component={SelectAddress}/>
                <Route exact path ="/editAddress" component={EditAddress}/>
                
                <Route path="/thankYou" component={ThankYou}/>
            </Switch>


        </Router>

    );
}

export default App;