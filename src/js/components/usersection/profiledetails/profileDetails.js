import React, { Component } from 'react'
import '../profiledetails/profileDetails.css'
export class ProfileDetails extends Component {
    render() {
        return (
            <div>
                <div className="profile">
                        <div className=""><h4 >Profile</h4></div>
                        <div><hr/></div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-4"><h6>First Name</h6></div>
                                <div className="col-8"></div>
                            </div>

                            <div className="row">
                                <div className="col-4"><h6>Last Name</h6></div>
                                <div className="col-8"></div>
                            </div>

                            <div className="row">
                                <div className="col-4"> <h6>Gender</h6></div>
                                <div className="col-8"></div>
                            </div>

                            <div className="row">
                                <div className="col-4">Date Of Birth</div>
                                <div className="col-8"></div>
                            </div>

                            <div className="row">
                                <div className="col-4">Mobile Number</div>
                                <div className="col-8"></div>
                            </div>

                            <div className="row">
                                <div className="col-4">Email</div>
                                <div className="col-8"></div>
                            </div>
                            
                            <div><hr/></div>
                           
                        <button className="btn ">Edit</button>    
                        
                        </div>
                        
                        
                       
                    </div>
            </div>
        )
    }
}

export default ProfileDetails
