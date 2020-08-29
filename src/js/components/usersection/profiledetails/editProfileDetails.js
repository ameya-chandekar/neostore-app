import React, { Component } from 'react';
import Navbar from '../../navbar/navbar'
import Usersoption from '../useroptions/usersoption'
// import userIcon from '../../assets/images/profile-placeholder.png';
// import UserProfile from '../UserProfile/UserProfile';

import CircularProgress from '@material-ui/core/CircularProgress';
// import EditIcon from '@material-ui/icons/Edit';
import sweetalert2 from 'sweetalert2';
import {
  
    RadioGroup,
    FormLabel,
    FormControl,
    FormControlLabel,
    Radio,

} from '@material-ui/core';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import TextField from '@material-ui/core/TextField';
import FormHelperText from "@material-ui/core/FormHelperText";
// import {editUserProfile} from '../../api/api';
import moment from 'moment';
//redux
import { connect } from 'react-redux';
// import * as actions from '../../../redux/actions';
import * as actions from '../../../redux/actions/getProfileAction';
import * as action from '../../../redux/actions/editProfileDetailsAction';
export class EditProfileDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: {},
            first_name: '',
            last_name: '',
            gender: '',
            dob: '',
            phone_no: '',
            email: '',
        }
    }
    componentDidMount() {
        const data1 = localStorage.getItem('login_user_data');
        const userData = JSON.parse(data1);
        const user_token = userData.token
        const { Profile } = this.props
        // const profileData = this.props.getProfile({ user_token })
        // .then((res) => {
        //     console.log(Profile.customer_proile);
        this.setState({
            // profile_img:Profile.customer_proile.profile_img,
            first_name: Profile.customer_proile.first_name,
            last_name: Profile.customer_proile.last_name,
            gender: Profile.customer_proile.gender,
            dob: Profile.customer_proile.dob,
            phone_no: Profile.customer_proile.phone_no,
            email: Profile.customer_proile.email,
        })
        // })
    }
    handleChangeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleImage =  (e) => {
        this.setState({
            profile_img: e.target.files[0]
        }) 
    }

    dobHandler = (e) => {
        // console.log(e.target.value ,"what is the value")
        this.setState({
            dob: e.target.value,
        })
    }

    editHandler = () => {
        const data1 = localStorage.getItem('login_user_data');
        const userData = JSON.parse(data1);
        const user_token = userData.token;
        // console.log(user_token, "token for edit profile");

        // const =this.state.profile_img.profile_img
        const {profile_img,first_name,last_name,email,dob,phone_no,gender}=this.state;
        console.log(profile_img,"profile img state" )
        const result = this.props.editProfileDetails({ profile_img,first_name,last_name,email,dob,phone_no,gender, user_token })
            .then(res => {
                sweetalert2.fire({
                    'title': 'Profile edited successfully',
                    'icon': 'success'

                });
                // return  <Redirect to="/UserProfile"/>
                this.props.history.push('/UserProfile')
            })
            .catch(err => {
                sweetalert2.fire({
                    'title': 'OOps.. some error occured',
                    'text': `Error details: ${err}`
                })
            })
    }
    render() {
const {userData} = this.state;
const {gender}=this.state
const date =Date(this.state.dob)
// const dob =userData.dob?userData.dob:null
// console.log(dob,"dob from userdata")
         const startDate= new Date()
        return (
            <div>
                <Navbar login={localStorage.getItem('login_user_data') ? 'true' : 'false'} />
                <div className=" ">
                    <div className="row">
                        <div className="col-12">
                            <h1>My Account</h1>
                        </div>
                    </div><hr />
                    {this.state.userData ?
                        <div className="row">
                            <div className="col-lg-4 col-md-12 text-center">
                                <Usersoption />
                            </div>
                            <div className="col-lg-8 col-md-12 ">

                                <div className="container" style={{ border: '1px groove', borderRadius: '5px' }}>
                                    <h3 className="mt-2">Edit Profile</h3>
                                    <FormControl className="mb-3 mt-3" variant="outlined"
                                        error={this.state.firstNameErrorText ? true : false} fullWidth
                                        defaultValue={this.state.userData.first_name}
                                        onChange={this.handleChangeInput}
                                        onBlur={this.handleChangeInput}>
                                        <label>First Name</label>
                                        <input className="form-control"
                                            id="outlined-adornment-email"
                                            type="text"
                                            name="first_name"
                                            autoComplete="off"
                                            defaultValue={this.state.first_name}

                                            onChange={(e) => { this.setState({ first_name: e.target.value }) }}
                                            // value={this.state.password}


                                            labelWidth={70}
                                        />
                                        <FormHelperText id="component-error-text">{this.state.firstNameErrorText}</FormHelperText>
                                    </FormControl>
                                    <FormControl className="mb-3" variant="outlined" error={this.state.lastNameErrorText ? true : false} fullWidth
                                        onChange={this.handleChangeInput} onBlur={this.handleChangeInput}>
                                        <label>Last Name</label>
                                        <input className="form-control"
                                            id="outlined-adornment-email"
                                            type="text"
                                            name="last_name"
                                            autoComplete="off"
                                            defaultValue={this.state.last_name}
                                            // value={this.state.password}

                                            labelWidth={100}
                                        />
                                        <FormHelperText id="component-error-text">{this.state.lastNameErrorText}</FormHelperText>
                                    </FormControl>



                                    {/* <FormControl className="mb-3" error={this.state.genderErrorText ? true : false} onBlur={this.handleGenderError}>
                                        <label>Gender</label>
                                        <RadioGroup aria-label="gender" name="gender1" onChange={this.handleChangeInput} defaultValue={this.state.userData.gender}>
                                            <FormControlLabel value="female" defaultChecked={true} control={<Radio />} label="Female" />
                                            <FormControlLabel value="male" defaultChecked={this.state.userData.gender = 'female' ? true : false} control={<Radio />} label="Male" />
                                        </RadioGroup>

                                    </FormControl> */}

                                    <FormControl className="mb-3" error={this.state.genderErrorText ? true : false} onBlur={this.handleGenderError}>

                                        <FormLabel component="legend">Gender</FormLabel>
                                        <RadioGroup aria-label="gender"
                                            name="gender"
                                            defaultValue={this.state.gender}
                                            onChange={this.handleChangeInput} >
                                            <span><FormControlLabel value="female" control={<Radio />} label="Female" />
                                                <FormControlLabel value="male" control={<Radio />} label="Male" /></span>
                                        </RadioGroup>

                                    </FormControl>


                                    {/* <DatePicker
                                     
                                    selected={this.state.startDate} 
                                    onChange={(e) => this.dobHandler(e)} 
                                    /> */}
                                      <FormControl className="mb-3">
                                        <TextField
                                            id="date"
                                            label="Birthdate"
                                            type="date"
                                            defaultValue= {date}
                                            onChange={(e) => this.dobHandler(e)}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </FormControl> 
                                    <FormControl className="mb-3" variant="outlined" error={this.state.phoneNoErrorText ? true : false} fullWidth
                                        onChange={this.handleChangeInput} onBlur={this.handleChangeInput}>
                                        <label>Mobile No</label>
                                        <input className="form-control"
                                            id="outlined-adornment-password"
                                            type="text"
                                            name="phone_no"
                                            onChange={this.handleChangeInput}
                                            defaultValue={this.state.phone_no}
                                            // value={this.state.password}


                                            labelWidth={150}
                                        />

                                        <FormHelperText id="component-error-text">{this.state.phoneNoErrorText}</FormHelperText>

                                    </FormControl>

                                    <FormControl className="mb-3" variant="outlined" error={this.state.emailErrorText ? true : false} fullWidth
                                        onChange={this.handleChangeInput} onBlur={this.handleChangeInput}>
                                        <label>Email id</label>
                                        <input className="form-control"
                                            id="outlined-adornment-email"
                                            type="text"
                                            name="email"
                                            onChange={this.handleChange}

                                            // value={this.state.password}
                                            defaultValue={this.state.email}
                                            labelWidth={100}
                                        />
                                        <FormHelperText id="component-error-text">{this.state.emailErrorText}</FormHelperText>
                                        <label className="mb-1 mt-2">Choose Profile picture to upload</label>
                                        
                                        <input type='file' className="mb-2 mt-1" defaultValue={this.state.profile_img} onChange={(e) => this.handleImage(e)} id="img" name="profilePicture"  />

                                        <button className="btn btn-info mt-3" style={{ width: "20%" }} onClick={this.editHandler}>Edit</button>
                                    </FormControl>
                                </div>

                            </div>
                        </div> :  <div className="row container text-center m-5"><CircularProgress color="inherit" /></div>
                    }
                </div>
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
        editProfileDetails: (payload) => dispatch(action.editProfileDetails(payload))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditProfileDetails);


