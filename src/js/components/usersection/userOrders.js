import React, { Component } from 'react'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import Usersoption from'../usersection/useroptions/usersoption'
import ProfileDetails from'./profiledetails/profileDetails'
import ChangePassword from './changepassword/changePassword'
import ShowAddress from './address/showAddress'
import ShowOrders from './orders/showOrders'
import "./userOrders.css"
//css
export class  UserOrders extends Component {
    render() {
        return (
            <div>
             <Navbar  login={localStorage.getItem('login_user_data') ? 'true' : 'false'}/>
             {localStorage.getItem('login_user_data') ?
                <div className="user-dashboard container mt-5 mb-5 ">
                    <h2>My Account</h2>
                    <hr/>

                    <div className="row">
                    <div className="col-lg-4 col-md-12">
                       <Usersoption/>
                    </div>

                    <div className="col-lg-8 col-md-12">

                        
                        <ShowOrders/>
                    </div>
                   
                    </div>
                </div>
                :<div>
                    < h1 className="loginFirst" >Please Login First </h1>
                </div>}
                <Footer/>
            </div>
        )
    }
}

export default UserOrders
