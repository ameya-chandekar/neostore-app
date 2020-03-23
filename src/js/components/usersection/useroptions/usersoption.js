import React, { Component } from 'react'
import '../useroptions/usersoption.css'
import profile from '../../../../assets/profile-placeholder.png'

export class Usersoption extends Component {
    render() {
        return (
            <div>
                        <div className="profile-img text-center">
                            <img src={profile}/>
                        </div>
                        <div className="row "><span className="text-center">username</span></div>
                      <div className="row"><div className="col"><button className="btn profile-img-btn"> Order</button></div></div>
                      <div className="row"><div className="col"><button className="btn profile-img-btn"> Profile</button></div></div>
                      <div className="row"><div className="col"><button className="btn profile-img-btn"> Address</button></div></div>
                      <div className="row"><div className="col"><button className="btn profile-img-btn"> Change Password</button></div></div>

                        </div>
        )
    }
}

export default Usersoption
