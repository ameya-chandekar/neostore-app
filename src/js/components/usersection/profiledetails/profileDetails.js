import React, { Component } from 'react'
import { connect } from 'react-redux';
// import * as actions from '../../../redux/actions';
import * as actions from '../../../redux/actions/getProfileAction';
import '../profiledetails/profileDetails.css'
import { Link } from 'react-router-dom';



export class ProfileDetails extends Component {
  
  
    componentDidMount(){
        const data1 = localStorage.getItem('login_user_data');
        const userData = JSON.parse(data1);
        const user_token = userData.token
        this.props.getProfile({user_token})
        const {Profile}=this.props
        console.log(Profile,"vadvavadvavdavdvadvavd") 
    }
    render() {
        const {Profile}=this.props
        console.log(Profile,"vadvavadvavdavdvadvavd") 
            const data =Profile.customer_proile
                console.log(data,"data vala log")
        return (
            <div>
                <div className="profile" style={{border:'1px groove' ,borderRadius:'5px'}}>
                        <div className="" ><h3 >Profile</h3></div>
                        <div><hr/></div>
                        <div className="">
                            <div className="row m-2">
                                <div className="col-lg-3 col-md-12"><h6>First Name</h6></div>
                                {<div className="col-lg-9 col-md-12">:&nbsp;{data?data.first_name:null}</div>}
                            </div>

                            <div className="row m-2">
                                <div className="col-lg-3 col-md-12"><h6>Last Name</h6></div>
                                <div className="col-lg-9 col-md-12">:&nbsp;{data?data.last_name:null}</div>
                            </div>

                            <div className="row m-2">
                                <div className="col-lg-3 col-md-12"> <h6>Gender</h6></div>
                                <div className="col-lg-9 col-md-12">:&nbsp;{data?data.gender:null}</div>
                            </div>

                            <div className="row m-2">
                                <div className="col-lg-3 col-md-12"><h6>Date Of Birth</h6></div>
                                <div className="col-lg-9 col-md-12">:&nbsp;{data?data.dob?data.dob:"invalid date":null}</div>
                            </div>

                            <div className="row m-2">
                                <div className="col-lg-3 col-md-12"><h6>Mobile Number</h6></div>
                                <div className="col-lg-9 col-md-12">:&nbsp;{data?data.phone_no:null}</div>
                            </div>

                            <div className="row m-2">
                                <div className="col-lg-3 col-md-12"><h6>Email</h6></div>
                                <div className="col-lg-9 col-md-12">:&nbsp;{data?data.email:null}</div>
                            </div>
                            
                            <div><hr/></div>
                           
                        
                        <Link to="/editProfile" className="btn"><button className="btn btn-primary">Edit</button></Link>
                        
                        </div>
                        
                        
                       
                    </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
     Profile:state.getProfile.profile,
     
    }
    
    
  }
  const mapDispatchToProps = dispatch => {
    return {
      getProfile: (payload) => dispatch(actions.getProfileData(payload)),
    
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)( ProfileDetails);


