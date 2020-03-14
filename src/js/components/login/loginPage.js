import React, { Component } from 'react'
// import clsx from "clsx";
// import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";

// import Input from "@material-ui/core/Input";
// import FilledInput from "@material-ui/core/FilledInput";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
// import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
// import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import MailIcon from '@material-ui/icons/Mail';
import { GoogleLogin } from 'react-google-login';
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import "./loginPage.css"
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/logInAction';

const responseGoogle = (response) => {
    console.log(response);
}
export class LoginPage extends Component {

    constructor(props) {
        super(props)
        // this.props.logout();

        this.state = {
            showPassword: false,
            username: '',
            password: '',
            submitted: false
        }
    }
    
    //this is for password show/hide toggle
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
    handleSubmit=(e)=> {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        if (username && password) {
            this.props.onLogIn({username, password});
        }
    }
    render() {
        console.log("username",this.state.username);
        console.log("password",this.state.password);

        return (

            <div>
                <Navbar />
                <div className="loginPage container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="social-btn-wrapper">
                                <div className="row"><div className="col-12 "><button className="btn btn-lg btn-primary social-login"><h6>Login With Facebook</h6></button></div></div>
                                <GoogleLogin
                                    clientId="1046035359147-c0uasts79ddvoa7obt5fltk2dud9b3sr.apps.googleusercontent.com"
                                    render={renderProps => (
                                        <button className="btn google-btn" onClick={renderProps.onClick} disabled={renderProps.disabled}><b><i class="fa fa-google"></i>Login With Google</b></button>
                                    )}
                                    buttonText="Login"
                                    onSuccess={responseGoogle}
                                    onFailure={responseGoogle}
                                    cookiePolicy={'single_host_origin'}
                                />
                                <div className="row"><div className="col-12 "><button className="btn btn-lg btn- social-login"><h6>Login With Twiiter</h6></button></div></div>

                            </div>

                        </div>
                        <div className="col-lg-6 col-md-12">

                            <div class="card card-signin my-5">
                                <div class="card-body">
                                    <h3 class=" card-title text-left">
                                        <b>Login to NeoSTORE</b></h3>
                                    <form class="form-signin" onSubmit={this.handleSubmit}>
                                        <div class="form-label-group">
                                            {/* <input type="email" id="inputEmail" class="form-control mt-3 mb-4 pt-4 pb-4" placeholder="Email Address" required autofocus /> */}
                                            <FormControl className="form-control" variant="outlined">
                                                <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
                                                <OutlinedInput
                                                    id="username"
                                                    name="username"
                                                    type="text"
                                                    onChange={this.handleChange}
                                                    //   value={this.state.password}

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
                                                    id="password"
                                                    name="password"
                                                    type={this.state.showPassword ? 'text' : 'password'}
                                                    //  value={this.state.password}
                                                    onChange={this.handleChange}
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label="toggle password visibility"
                                                                onClick={this.handleClickShowPassword}
                                                                onMouseDown={this.handleMouseDownPassword}
                                                                edge="end"
                                                            >
                                                                {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    }
                                                    labelWidth={70}
                                                />
                                            </FormControl>
                                        </div>
                                        <div>
                                            <button  class="btn btn-danger text-uppercase float-left" type="submit">Login</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row " >
                        <div className="col-lg-12 d-flex justify-content-center">
                            <button className="btn">Register Now</button>  <span style={{ marginTop: "7px" }}>|</span>
                            <button className="btn">Forgot Password</button>
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
      isLogin:state.login.isLogin
      
    };
    
    
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      onLogIn: (payload) => dispatch(actions.login(payload))
    }
  }
  
  export default connect(null, mapDispatchToProps)(LoginPage);
//   export default LoginPage


