import React, { Component } from 'react';
import Navbar from'../../navbar/navbar'
import Usersoption from'../useroptions/usersoption'
// import userIcon from '../../assets/images/profile-placeholder.png';
import { Link } from 'react-router-dom';
import ReorderIcon from '@material-ui/icons/Reorder';
import PersonIcon from '@material-ui/icons/Person';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import SyncAltIcon from '@material-ui/icons/SyncAlt';
// import UserProfile from '../UserProfile/UserProfile';
import { getProfileData } from '../../../api/api';
import CircularProgress from '@material-ui/core/CircularProgress';
import EditIcon from '@material-ui/icons/Edit';
import sweetalert2 from 'sweetalert2';
import {
    Button,
    RadioGroup,
    FormLabel,
    FormControl,
    FormControlLabel,
    Radio,
    OutlinedInput
} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import FormHelperText from "@material-ui/core/FormHelperText";
// import {editUserProfile} from '../../api/api';

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
            birthdate: '',
            first_name: '',
            last_name: '',
            gender: '',
            dob: '',
            phone_no: '',
            email: '',
            submitData:{}
        }
    }

    componentDidMount() {
        const data1 = localStorage.getItem('login_user_data');
        const userData = JSON.parse(data1);
        const user_token = userData.token
        const {Profile}=this.props
        const profileData = this.props.getProfile({user_token})
            // .then((res) => {
            //     console.log(Profile.customer_proile);

                this.setState({
                    userData: Profile.customer_proile
                })
            // })

    }

    birthdateHandler = (e) => {
        this.setState({
            birthdate: Date.parse(e.target.value)
        })
        console.log('birthdate', this.state.birthdate)
    }

    imgHandler = (e) => {
        let files = e.target.files;
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = (e) => {
            var formData = {
                'profile_img': e.target.result,
                'first_name': this.state.userData.first_name,
                'last_name': this.state.userData.last_name,
                'email': this.state.userData.email,
                'dob': this.state.userData.dob,
                'phone_no': this.state.userData.phone_no,
                'gender': this.state.userData.gender
            }
            this.setState({
                submitData:formData
            })
        }
        
    }

    editHandler=async ()=>{
        const data1 = localStorage.getItem('login_user_data');
        const userData = JSON.parse(data1);
        const user_token = userData.token
        console.log(user_token,"token for edit profile")
        const submitData =this.state.submitData
        const result=await this.props.editProfileDetails({submitData,user_token})
        // .then(res=>{
        //     sweetalert2.fire({
        //         'title':'Profile edited successfully',
        //         'icon':'success'
        //     })
        // }).catch(err=>{
        //     sweetalert2.fire({
        //         'title':'OOps.. some error occured',
        //         'text':`Error details: ${err}`
        //     })
        // })
    }

    render() {


        return (
            <div>      <Navbar  login={localStorage.getItem('login_user_data') ? 'true' : 'false'}/>
                <div className="container m-4">
                    <div className="row">
                        <div className="col-12">
                            <h1>My Account</h1>
                        </div>


                    </div><hr />
                    {this.state.userData ?
                        <div className="row">
                            <div className="col-6 text-center">
                            <Usersoption/>
                            </div>
                            <div className="col-6 mt-2">

                                <div className="container card ">
                                    <h3 className="mt-2">Edit Profile</h3>
                                    <FormControl className="mb-3 mt-3" variant="outlined" error={this.state.firstNameErrorText ? true : false} fullWidth defaultValue={this.state.userData.first_name} onChange={this.handleChangeInput} onBlur={this.handleChangeInput}>
                                        <label>First Name</label>
                                        <input className="form-control"
                                            id="outlined-adornment-email"
                                            type="text"
                                            name="first_name"
                                            autoComplete="off"
                                            defaultValue={this.state.userData.first_name}

                                            onChange={(e) => { this.setState({ first_name: e.target.value }) }}
                                            // value={this.state.password}


                                            labelWidth={70}
                                        />
                                        <FormHelperText id="component-error-text">{this.state.firstNameErrorText}</FormHelperText>
                                    </FormControl>
                                    <FormControl className="mb-3" variant="outlined" error={this.state.lastNameErrorText ? true : false} fullWidth onChange={this.handleChangeInput} onBlur={this.handleChangeInput}>
                                        <label>Last Name</label>
                                        <input className="form-control"
                                            id="outlined-adornment-email"
                                            type="text"
                                            name="last_name"
                                            autoComplete="off"
                                            defaultValue={this.state.userData.last_name}
                                            // value={this.state.password}

                                            labelWidth={100}
                                        />
                                        <FormHelperText id="component-error-text">{this.state.lastNameErrorText}</FormHelperText>
                                    </FormControl>

                                    <FormControl className="mb-3" error={this.state.genderErrorText ? true : false} onBlur={this.handleGenderError}>
                                        <label>Gender</label>
                                        <RadioGroup aria-label="gender" name="gender1" onChange={this.handleChangeInput} defaultValue={this.state.userData.gender}>
                                            <FormControlLabel value="female" defaultChecked={true} control={<Radio />} label="Female" />
                                            <FormControlLabel value="male" defaultChecked={this.state.userData.gender = 'female' ? true : false} control={<Radio />} label="Male" />
                                        </RadioGroup>

                                    </FormControl>

                                    <FormControl className="mb-3">
                                        <TextField
                                            id="date"
                                            label="Birthday"
                                            type="date"
                                            defaultValue="2020-03-31"
                                            onChange={(e) => this.birthdateHandler(e)}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </FormControl>
                                    <FormControl className="mb-3" variant="outlined" error={this.state.phoneNoErrorText ? true : false} fullWidth onChange={this.handleChangeInput} onBlur={this.handleChangeInput}>
                                        <label>Mobile No</label>
                                        <input className="form-control"
                                            id="outlined-adornment-password"
                                            type="text"
                                            name="mobile_no"
                                            onChange={this.handleChange}
                                            defaultValue={this.state.userData.phone_no}
                                            // value={this.state.password}


                                            labelWidth={150}
                                        />

                                        <FormHelperText id="component-error-text">{this.state.phoneNoErrorText}</FormHelperText>

                                    </FormControl>

                                    <FormControl className="mb-3" variant="outlined" error={this.state.emailErrorText ? true : false} fullWidth onChange={this.handleChangeInput} onBlur={this.handleChangeInput}>
                                        <label>Email id</label>
                                        <input className="form-control"
                                            id="outlined-adornment-email"
                                            type="text"
                                            name="email"
                                            onChange={this.handleChange}

                                            // value={this.state.password}
                                            defaultValue={this.state.userData.email}

                                            labelWidth={100}
                                        />
                                        <FormHelperText id="component-error-text">{this.state.emailErrorText}</FormHelperText>
                                        <label className="mb-1 mt-2">Choose Profile picture to upload</label>
                                        <input type='file' className="mb-2 mt-1" onChange={(e) => { this.imgHandler(e) }} id="img" name="profilePicture" accept="image/*" />
                                        <button className="btn btn-info mt-3" onClick={this.editHandler}>Edit</button>
                                    </FormControl>
                                    




                                </div>

                            </div>
                        </div> : <div className="row container text-center m-5"><CircularProgress color="inherit" /></div>}
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
      editProfileDetails:(payload)=> dispatch(action.editProfileDetails(payload))
     }
  }
export default connect(mapStateToProps, mapDispatchToProps)( EditProfileDetails);


