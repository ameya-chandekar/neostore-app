import React, { Component } from 'react'
import '../profiledetails/profileDetails.css'
export class ProfileDetails extends Component {
    render() {
        return (
            <div>
                <div className="profile" style={{border:'1px groove' ,borderRadius:'5px'}}>
                        <div className="" ><h3 >Profile</h3></div>
                        <div><hr/></div>
                        <div className="">
                            <div className="row m-2">
                                <div className="col-lg-3 col-md-12"><h6>First Name</h6></div>
                                <div className="col-lg-9 col-md-12">:</div>
                            </div>

                            <div className="row m-2">
                                <div className="col-lg-3 col-md-12"><h6>Last Name</h6></div>
                                <div className="col-lg-9 col-md-12">:</div>
                            </div>

                            <div className="row m-2">
                                <div className="col-lg-3 col-md-12"> <h6>Gender</h6></div>
                                <div className="col-lg-9 col-md-12">:</div>
                            </div>

                            <div className="row m-2">
                                <div className="col-lg-3 col-md-12"><h6>Date Of Birth</h6></div>
                                <div className="col-lg-9 col-md-12">:</div>
                            </div>

                            <div className="row m-2">
                                <div className="col-lg-3 col-md-12"><h6>Mobile Number</h6></div>
                                <div className="col-lg-9 col-md-12">:</div>
                            </div>

                            <div className="row m-2">
                                <div className="col-lg-3 col-md-12"><h6>Email</h6></div>
                                <div className="col-lg-9 col-md-12">:</div>
                            </div>
                            
                            <div><hr/></div>
                           
                        <button className="btn btn-primary">Edit</button>
                        
                        </div>
                        
                        
                       
                    </div>
            </div>
        )
    }
}

export default ProfileDetails
