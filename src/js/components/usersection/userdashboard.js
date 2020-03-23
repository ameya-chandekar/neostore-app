import React, { Component } from 'react'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import Usersoption from'../usersection/useroptions/usersoption'
import ProfileDetails from'./profiledetails/profileDetails'
import ChangePassword from './changepassword/changePassword'
//css
import '../usersection/userdashboard.css'
export class  Userdashboard extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className="user-dashboard container mt-5 mb-5 ">
                    <h2>My Account</h2>
                    <hr/>
                    <div className="row">
                    <div className="col-lg-4 col-md-12">
                       <Usersoption/>
                    </div>

                    <div className="col-lg-8 col-md-12">
                        <ProfileDetails/>
                        
                        <ChangePassword/>
                        
                    </div>
                   
                    </div>
                </div>
                
                <Footer/>
            </div>
        )
    }
}

export default Userdashboard
