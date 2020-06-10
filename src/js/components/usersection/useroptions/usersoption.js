import React, { Component } from 'react'
import '../useroptions/usersoption.css'
import profile from '../../../../assets/profile-placeholder.png'
import { Link } from 'react-router-dom'
class Usersoption extends Component {
    render() {
        return (
            <div>
                <div className="profile-img text-center">
                    <img src={profile} />
                </div>
                <div className="row "><span className="text-center">username</span></div>
                <div className="row"><div className="col"> <Link to="/UserOrders"><button className="btn profile-img-btn"> Order</button></Link></div></div>
                <div className="row"><div className="col"  > <Link to="/UserProfile"><button className="btn profile-img-btn"> Profile</button></Link></div></div>
                <div className="row"><div className="col"> <Link to="/UserAddress"><button className="btn profile-img-btn"> Address</button></Link></div></div>
                <div className="row"><div className="col"> <Link to="/UserChangePassword"><button className="btn profile-img-btn"> Change Password</button></Link></div></div>
            </div>
        )
    }
}

export default Usersoption
