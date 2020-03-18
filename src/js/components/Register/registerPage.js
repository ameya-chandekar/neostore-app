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
import  RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio';
import FormLabel from '@material-ui/core/FormLabel';

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
            first_name:'',
            last_name:'',
            email:'',
            pass:'',
            confirmPass:'',
            phone_no:'',
            gender:'male',
            submitted: false,
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
handleChange=(e) =>{
    const { name, value } = e.target;
    this.setState({ [name]: value });
    
}
  handleSubmit= async(e)=> {
    e.preventDefault();


        this.setState({ submitted: true });
        const { first_name,last_name,email,pass,confirmPass,phone_no,gender} = this.state;
         if (first_name && last_name && email && pass && confirmPass && phone_no && gender) {
             try {
                 this.props.onRegister({first_name,last_name,email,pass,confirmPass,phone_no,gender} );
                
             } catch (error) {
                 console.log(error);
                 return false
             }
            
            
    } 
 
    console.log(this.props.registered);
    
   
}


componentDidUpdate(prevProps){
    if(this.props.registered){
        console.log("redirected");
    this.props.history.push('/Loginpage')
   
    
    }
}

    render() {
        console.log("----------------------",this.props.registered);
        
        const { first_name,last_name,email,pass,confirmPass,phone_no,gender} = this.state;

        console.table("fname:",first_name, "lname:",last_name, "email:",email, "pass:",pass, "cpass:",confirmPass,"number:",phone_no ,"gender:",gender)
// console.log(this.props.registered)
        return (
            <div>
                <Navbar />
                <div className="RegisterPage container">
                    <div className="container">
                        <div className="row RegisterPage-Social">
                            <div className="col-lg-6 col-md-12"><div ><button className="btn btn-lg btn-primary social-login"><h6>Login With Facebook</h6></button></div> </div>
                            <div className="col-lg-6 col-md-12"><div><button className="btn btn-lg btn-danger social-login"> <h6>Login With Google</h6></button></div></div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div class="card card-signin my-5">
                                    <div class="card-body">
                                        <h3 class=" card-title text-left">
                                            <b>Register to NeoSTORE</b></h3>
                                        <form class="form-signin" onSubmit={this.handleSubmit}>
                                            <div class="form-label-group">
                                                {/* <input type="email" id="inputEmail" class="form-control mt-3 mb-4 pt-4 pb-4" placeholder="Email Address" required autofocus /> */}
                                                <FormControl className="form-control" variant="outlined">
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
                                                </FormControl>

                                            </div>

                                            <div class="form-label-group">
                                                {/* <input type="email" id="inputEmail" class="form-control mt-3 mb-4 pt-4 pb-4" placeholder="Email Address" required autofocus /> */}
                                                <FormControl className="form-control" variant="outlined">
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
                                                </FormControl>

                                            </div>

                                            <div class="form-label-group">
                                                {/* <input type="email" id="inputEmail" class="form-control mt-3 mb-4 pt-4 pb-4" placeholder="Email Address" required autofocus /> */}
                                                <FormControl className="form-control" variant="outlined">
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
                                                </FormControl>

                                            </div>

                                            <div class="form-label-group">
                                                {/* <input type="password" id="inputPassword" class="form-control mb-3 pt-4 pb-4" placeholder="Password" required /> */}
                                                <FormControl className="formControl" variant="outlined">
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
                                                </FormControl>
                                            </div>

                                            <div class="form-label-group">
                                                {/* <input type="password" id="inputPassword" class="form-control mb-3 pt-4 pb-4" placeholder="Password" required /> */}
                                                <FormControl className="formControl" variant="outlined">
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

                                            <div class="form-label-group">
                                                {/* <input type="email" id="inputEmail" class="form-control mt-3 mb-4 pt-4 pb-4" placeholder="Email Address" required autofocus /> */}
                                                <FormControl className="form-control" variant="outlined">
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
                                                </FormControl>

                                            </div>


                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">Gender</FormLabel>
                                                <RadioGroup defaultValue="male" aria-label="gender" name="customized-radios" name="gender" onChange={this.handleChange}>                                                   
                                                    <FormControlLabel value="male" control={<Radio/>} label="Male" />  
                                                    <FormControlLabel value="female" control={<Radio/>} label="Female" />                                      
                                                </RadioGroup>
                                            </FormControl>
                                            <div>
                                            <button type="submit" class="btn btn-danger text-uppercase float-left"  onClick={this.handleSubmit}>Register</button>
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
      registered:state.register.isRegister
      
    };
    
    
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      onRegister: (payload) => dispatch(actions.register(payload)) 
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
// export default RegisterPage
