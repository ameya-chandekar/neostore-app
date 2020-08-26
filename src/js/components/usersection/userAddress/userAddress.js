import React, { Component } from 'react'
import Navbar from '../../navbar/navbar'
import Footer from '../../footer/footer'
import Usersoption from'../../usersection/useroptions/usersoption'
import ShowOrders from '../orders/showOrders'
import ShowAddress from '../address/showAddress'

//css
// import '../usersection/userProfile.css'
export class  UserAddress extends Component {
    render() {
        return (
            <div>
             <Navbar  login={localStorage.getItem('login_user_data') ? 'true' : 'false'}/>

                <div className="user-dashboard container mt-5 mb-5 ">
                    <h2>My Account</h2>
                    <hr/>
                    <div className="row">
                    <div className="col-lg-4 col-md-12">
                       <Usersoption/>
                    </div>

                    <div className="col-lg-8 col-md-12">

                        
                        
                        <ShowAddress/>
                      
                    </div>
                   
                    </div>
                </div>
                
                <Footer/>
            </div>
        )
    }
}

export default UserAddress
