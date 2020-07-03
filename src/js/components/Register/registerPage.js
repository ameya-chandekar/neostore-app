import React, { Component } from 'react'

//imports for material ui
import Icon from "@material-ui/core/Icon";
import TextFieldsIcon from '@material-ui/icons/TextFields';
import CallIcon from '@material-ui/icons/Call';
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import MailIcon from '@material-ui/icons/Mail';
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio';
import FormLabel from '@material-ui/core/FormLabel';
import FormHelperText from '@material-ui/core/FormHelperText'

import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import "../Register/registerPage.css"

//imports of redux

import * as actions from '../../redux/actions/registerAction';
import { connect } from 'react-redux';
export class RegisterPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showPassword: false,
            first_name: '',
            last_name: '',
            email: '',
            pass: '',
            confirmPass: '',
            phone_no: '',
            gender: 'male',

            first_nameError: '',
            last_nameError: '',
            emailError: '',
            passError: '',
            confirmPassError: '',
            phone_noError: '',


            submittedError: false,
        }
    }
    handleClickShowPassword = () => {
        this.setState({
            showPassword: !this.state.showPassword
        })
    }
    handleMouseDownPassword = () => {
        this.setState({
            showPassword: true
        })
    }


    //this is to set state on change 
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });

    }
    handleSubmit = async (e) => {
        // this.handlefnameChange();
        e.preventDefault();
      this.handlefnameChange();
      this.handlelnameChange();
      this.handleEmailChange ();
      this.handlePassChange();
      this.handlePhoneNumber ();

    this.setState({ submitted: true });
    const { first_name, last_name, email, pass, confirmPass, phone_no, gender } = this.state;
        if (first_name && last_name && email && pass && confirmPass && phone_no && gender) {
            try {
                this.props.onRegister({ first_name, last_name, email, pass, confirmPass, phone_no, gender });

            } catch (error) {
                console.log(error);
                return false
            }


        }
    //     else if (first_name == '') {
    //         this.setState({ first_nameError: 'Please enter first name' })

    //     }
    //    else if (last_name == '') {
    //         this.setState({ last_nameError: 'Please enter last name' })
    //     }
        console.log(this.props.registered);

    }
    // componentDidUpdate(prevProps){
    //     if(this.props.registered){
    //         console.log("redirected");
    //     this.props.history.push('/Loginpage')


    //     }
    // }
    //functions for validattions 
    handlefnameChange = (e) => {
        if (this.state.first_name == '') {
            this.setState({ first_nameError: 'Please enter first name' })

        }
        else if (this.state.first_name.match(/^[a-zA-Z]*$/)) {
            this.setState({ first_nameError: '' })
        }
        else {
            this.setState({ first_nameError: 'cannot have number' })
        }
    }
    handlelnameChange = (e) => {
        if (this.state.last_name == '') {
            this.setState({ last_nameError: 'Please enter last name' })
        }
        else if (this.state.last_name.match(/^[a-zA-Z]*$/)) {
            this.setState({ last_nameError: '' })
        }
        else {
            this.setState({ last_nameError: '' })
        }
    }

    handleEmailChange = (e) => {
        if (this.state.email == '') {
            this.setState({ emailError: 'Please enter Email ' })
        }
        else if (/^([a-zA-Z])+([0-9a-zA-Z\.\-])+\@+(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,10})+$/.test(this.state.email)) {
            this.setState({ emailError: '' })
        }
        else {
            this.setState({ emailError: 'Enter a valid email' })
        }
    }

    handlePassChange = (e) => {
        const cond = /^[A-Za-z]\w{7,11}$/;
        if ( this.state.pass == '') {
            this.setState({ passError: 'Please enter password ' })
        }
        else if (this.state.pass.match(cond)) {
            this.setState({ passError: '' })
        }
        else {
            this.setState({ passError: 'password should have 8-12 characters and should contain only aplhanumeric values' })
        }
    }

    handlePhoneNumber = (e) => {
        if (this.state.phone_no == '') {
            this.setState({ phone_noError: 'Number Requred' })
        }

        else {
            this.setState({ phone_noError: '' })
        }
    }

    isNumber = (evt) => {

        evt = (evt) ? evt : window.event;
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {

            this.setState({ phone_noError: '* only numbers allowed' })

            return false;
        }
        return true;
    }

    render() {
        // console.log("----------------------",this.props.registered);
        const { first_name, last_name, email, pass, confirmPass, phone_no, gender } = this.state;
        console.table("fname:", first_name, "lname:", last_name, "email:", email, "pass:", pass, "cpass:", confirmPass, "number:", phone_no, "gender:", gender)
        console.log(this.props.registered)
        return (
            <div>
                <Navbar />
                <div className="RegisterPage container">
                    <div className="container">
                        <div className="row RegisterPage-Social">
                            <div className="col-lg-6 col-md-12"><div ><button className="btn btn-lg btn-primary social-login"><h6>Login With Facebook</h6></button></div> </div>
                            <div className="col-lg-6 col-md-12"><div><button className="btn btn-lg btn-danger social-login"> <h6>Login With Google</h6></button></div></div>
                        </div>
                        <div className="row register-card mb-3 mt-3 ">
                            <div className="col-12">
                                <div class="  mt-5">
                                    <div class="">
                                        <h3 class="  text-left">
                                            <b>Register to NeoSTORE</b></h3>
                                        <form class="form-signin" onSubmit={this.handleSubmit}>
                                            <div class="mb-5 mt-3">
                                                {/* <input type="email" id="inputEmail" class="form-control mt-3 mb-4 pt-4 pb-4" placeholder="Email Address" required autofocus /> */}
                                                <FormControl className="form-control" variant="outlined" error={this.state.first_nameError ? true : false}
                                                    onChange={this.handlefnameChange} onBlur={this.handlefnameChange}>
                                                    <InputLabel htmlFor="outlined-adornment-email">First Name</InputLabel>
                                                    <OutlinedInput
                                                        id="outlined-adornment-email"
                                                        type="text"
                                                        name="first_name"
                                                        onChange={this.handleChange}
                                                        // value={this.state.password}

                                                        endAdornment={
                                                            <InputAdornment position="end">
                                                                <Icon
                                                                    aria-label="toggle email visibility"

                                                                >
                                                                    <TextFieldsIcon />
                                                                </Icon>
                                                            </InputAdornment>
                                                        }
                                                        labelWidth={70}
                                                    />
                                                    <FormHelperText id="component-error-text">{this.state.first_nameError}</FormHelperText>
                                                </FormControl>

                                            </div>

                                            <div class="mb-5 mt-3">
                                                {/* <input type="email" id="inputEmail" class="form-control mt-3 mb-4 pt-4 pb-4" placeholder="Email Address" required autofocus /> */}
                                                <FormControl className="form-control" variant="outlined" error={this.state.last_nameError ? true : false}
                                                    onChange={this.handlelnameChange} onBlur={this.handlelnameChange}>
                                                    <InputLabel htmlFor="outlined-adornment-email">Last name</InputLabel>
                                                    <OutlinedInput
                                                        id="outlined-adornment-email"
                                                        type="text"
                                                        name="last_name"
                                                        onChange={this.handleChange}
                                                        // value={this.state.password}

                                                        endAdornment={
                                                            <InputAdornment position="end">
                                                                <Icon
                                                                    aria-label="toggle email visibility"

                                                                >
                                                                    <TextFieldsIcon />
                                                                </Icon>
                                                            </InputAdornment>
                                                        }
                                                        labelWidth={70}
                                                    />
                                                    <FormHelperText id="component-error-text">{this.state.last_nameError}</FormHelperText>

                                                </FormControl>

                                            </div>

                                            <div class="mb-5 mt-3">
                                                {/* <input type="email" id="inputEmail" class="form-control mt-3 mb-4 pt-4 pb-4" placeholder="Email Address" required autofocus /> */}
                                                <FormControl className="form-control" variant="outlined" error={this.state.emailError ? true : false} onChange={this.handleEmailChange} onBlur={this.handleEmailChange}>
                                                    <InputLabel htmlFor="outlined-adornment-email">Email Address</InputLabel>
                                                    <OutlinedInput
                                                        id="outlined-adornment-email"
                                                        type="text"
                                                        name="email"
                                                        onChange={this.handleChange}
                                                        // value={this.state.password}

                                                        endAdornment={
                                                            <InputAdornment position="end">
                                                                <Icon
                                                                    aria-label="toggle email visibility"

                                                                >
                                                                    <MailIcon />
                                                                </Icon>
                                                            </InputAdornment>
                                                        }
                                                        labelWidth={70}
                                                    />
                                                    <FormHelperText id="component-error-text">{this.state.emailError}</FormHelperText>
                                                </FormControl>

                                            </div>

                                            <div class="mb-5 mt-3">
                                                {/* <input type="password" id="inputPassword" class="form-control mb-3 pt-4 pb-4" placeholder="Password" required /> */}
                                                <FormControl className="formControl" variant="outlined" error={this.state.passError ? true : false} onChange={this.handlePassChange} onBlur={this.handlePassChange}>
                                                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                                    <OutlinedInput
                                                        id="outlined-adornment-password"
                                                        type={this.state.showPassword ? 'text' : 'password'}
                                                        name="pass"
                                                        onChange={this.handleChange}
                                                        value={this.state.password}

                                                        endAdornment={
                                                            <InputAdornment position="end">
                                                                <Icon
                                                                    aria-label="toggle password visibility"
                                                                    onClick={this.handleClickShowPassword}
                                                                    onMouseDown={this.handleMouseDownPassword}
                                                                    edge="end"
                                                                >
                                                                    {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                                                </Icon>
                                                            </InputAdornment>
                                                        }
                                                        labelWidth={70}
                                                    />
                                                    <FormHelperText id="component-error-text">{this.state.passError}</FormHelperText>
                                                </FormControl>
                                            </div>

                                            <div class="mb-5 mt-3">
                                                {/* <input type="password" id="inputPassword" class="form-control mb-3 pt-4 pb-4" placeholder="Password" required /> */}
                                                <FormControl className="formControl" variant="outlined" >
                                                    <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                                                    <OutlinedInput
                                                        id="outlined-adornment-password"
                                                        type={this.state.showPassword ? 'text' : 'password'}
                                                        name="confirmPass"
                                                        onChange={this.handleChange}
                                                        value={this.state.password}

                                                        endAdornment={
                                                            <InputAdornment position="end">
                                                                <Icon
                                                                    aria-label="toggle password visibility"
                                                                    onClick={this.handleClickShowPassword}
                                                                    onMouseDown={this.handleMouseDownPassword}
                                                                    edge="end"
                                                                >
                                                                    {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                                                </Icon>
                                                            </InputAdornment>
                                                        }
                                                        labelWidth={70}
                                                    />
                                                </FormControl>
                                            </div>

                                            <div class="mb-5 mt-3">
                                                {/* <input type="email" id="inputEmail" class="form-control mt-3 mb-4 pt-4 pb-4" placeholder="Email Address" required autofocus /> */}
                                                <FormControl className="form-control" variant="outlined" error={this.state.phone_noError ? true : false} onChange={this.handlePhoneNumber} onBlur={this.handlePhoneNumber}
                                                    onKeyUp={this.isNumber}>

                                                    <InputLabel htmlFor="outlined-adornment-email">Mobile Number</InputLabel>
                                                    <OutlinedInput
                                                        id="outlined-adornment-email"
                                                        type="text"
                                                        name="phone_no"
                                                        onChange={this.handleChange}
                                                        // value={this.state.password}

                                                        endAdornment={
                                                            <InputAdornment position="end">
                                                                <Icon
                                                                    aria-label="toggle email visibility"

                                                                >
                                                                    <CallIcon />
                                                                </Icon>
                                                            </InputAdornment>
                                                        }
                                                        labelWidth={70}
                                                    />
                                                    <FormHelperText id="component-error-text">{this.state.phone_noError}</FormHelperText>
                                                </FormControl>

                                            </div>


                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">Gender</FormLabel>
                                                <RadioGroup defaultValue="male" aria-label="gender" name="customized-radios" name="gender" onChange={this.handleChange}>
                                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                                </RadioGroup>
                                            </FormControl>
                                            <div>
                                                <button type="submit" class="btn btn-danger text-uppercase float-left mb-3" onClick={this.handleSubmit}>Register</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        registered: state.register.isRegister

    };


}

const mapDispatchToProps = dispatch => {
    return {
        onRegister: (payload) => dispatch(actions.register(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
// export default RegisterPage
