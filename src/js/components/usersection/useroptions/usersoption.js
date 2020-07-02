import React, { Component } from 'react'
import '../useroptions/usersoption.css'
import proimg from '../../../../assets/profile-placeholder.png'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux';
// import * as actions from '../../../redux/actions';
import * as actions from '../../../redux/actions/getProfileAction';
class Usersoption extends Component {


    componentDidMount() {
        const data1 = localStorage.getItem('login_user_data');
        const userData = JSON.parse(data1);
        const profileimage = userData.customer_details.profile_img
        const user_token = userData.token
        this.props.getProfile({ user_token })
        const { Profile } = this.props
        console.log(Profile, "vadvavadvavdavdvadvavd")
    }
    render() {

        const { Profile } = this.props
        const data = Profile.customer_proile
        const url = "http://180.149.241.208:3022/";
        const data1 = localStorage.getItem('login_user_data');
        const userData = JSON.parse(data1);
        const profileimage = userData.customer_details.profile_img
 console.log("profile image of user" ,url+profileimage)
        return (
            <div>
                <div className="profile-img text-center">
                    {profileimage ? <img src={url + profileimage} />
                        : <img src={proimg} />}
                </div>
                <div className="row text-center pl-5 pt-2" style={{color:"red",marginLeft:"10px"}}><h6 className="pl-5">{data ? data.first_name : null}&nbsp;&nbsp;&nbsp;{data ? data.last_name : null}</h6></div>
                <div className="row"><div className="col"> <Link to="/UserOrders"><button className="btn profile-img-btn"> Order</button></Link></div></div>
                <div className="row"><div className="col"  > <Link to="/UserProfile"><button className="btn profile-img-btn"> Profile</button></Link></div></div>
                <div className="row"><div className="col"> <Link to="/UserAddress"><button className="btn profile-img-btn"> Address</button></Link></div></div>
                <div className="row"><div className="col"> <Link to="/UserChangePassword"><button className="btn profile-img-btn"> Change Password</button></Link></div></div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        Profile: state.getProfile.profile,
    }

}
const mapDispatchToProps = dispatch => {
    return {
        getProfile: (payload) => dispatch(actions.getProfileData(payload)),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Usersoption);