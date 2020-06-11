import React, { Component } from 'react'
import Navbar from '../../navbar/navbar'
import Footer from '../../footer/footer'
import Usersoption from'../../usersection/useroptions/usersoption'
import ProfileDetails from'../profiledetails/profileDetails'

//css
// import '../usersection/userProfile.css'
export class  UserProfile extends Component {
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

                        
                        <ProfileDetails/>
                       
                    </div>
                   
                    </div>
                </div>
                
                <Footer/>
            </div>
        )
    }
}

export default UserProfile
