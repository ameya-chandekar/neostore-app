import React, { Component } from "react";
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
import FormHelperText from'@material-ui/core/FormHelperText'

import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import sweetalert2 from 'sweetalert2';

//redux
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/recoverPasswordAction';

// import { connect } from "react-redux";
// import * as actions from "";
 class RecoverPassword extends Component {
  constructor(props) {
    super(props);
    // this.props.logout();

    this.state = {
      otp:'',
      newPassword:'',
      confirmPassword:'',
      showPassword: false,
      submitted: false,
      otpError:'',
      passwordError:'',
      confirmPasswordError:'',





    };
  }
//this to set state as per value
  handleChange=(e) =>{
    const { name, value } = e.target;
    this.setState({ [name]: value });
    
}


  //this is for password show/hide toggle
  handleClickShowPassword = () => {
    this.setState({
      showPassword: !this.state.showPassword
    });
  };
  handleMouseDownPassword = () => {
    this.setState({
      showPassword: true
    });
  };


  handleotpChange=(e)=>{
    if(e.target.value=='')
    {
        this.setState({otpError:'Please enter OTP'})
        
    }
    else
    {
        this.setState({otpError:''})
    }
}

handlepassChange=(e)=>{
  const  cond = /^[A-Za-z]\w{7,11}$/;
   if(e.target.value=='')
   {
       this.setState({passwordError:'Please enter password '})
   }
   else if(e.target.value.match(cond))
   {
       this.setState({passwordError:''})
   }
   else
   {
       this.setState({passwordError:'password should have 8-12 characters and should contain only aplhanumeric values'})
   }
}

handlecpassChange=(e)=>{
  
   if(e.target.value=='')
  {
    this.setState({confirmPasswordError:'Please enter confirm password '})
  }
  else if(this.state.newPassword==this.state.confirmPassword){
    this.setState({confirmPasswordError:''})
  }
else if(this.state.newPassword!=this.state.confirmPassword){
  this.setState({confirmPasswordError:'should match with new password'})
}
  else
   {
       this.setState({confirmPasswordError:''})
   }
}

//submit handler

handleSubmit = async (e) => {
  e.preventDefault();
  if (isNaN(this.state.otp)) {
      this.setState({
        otpError: 'It should be a number'
      })
  }
  else if (!(this.state.otp >= 999 && this.state.otp < 10000)) {
      this.setState({
          otpError: 'Authentication code should be of 4 digits'
      })
  }
  else if (this.state.otp === 0) {
      this.setState({
          otpError: 'Please enter authentication code'
      })
  }
  else {
      this.setState({
          otpError: ''
      })
  }
  const passwordFormat = /^[A-Za-z]\w{7,11}$/;
  if (this.state.password === "") {
      this.setState({
          passwordErr: `Please enter password`
      })
  }
  else if (!this.state.password.match(passwordFormat) == null) {
      this.setState({
          passwordErr: 'Invalid password format (8-12) alphanumeric allowed'
      })
  }

  if (this.state.confirmPassword === "") {
      this.setState({
          confirmPasswordErr: `Please enter password again`
      })
  }
  else if (this.state.password !== this.state.confirmPassword) {
      this.setState({
          confirmPasswordErr: `Passwords don't match`
      })
  }
  else {
      this.setState({
          confirmPasswordErr: ''
      })
  }


  if (this.state.otpError === '' && this.state.passwordErr === '' && this.state.confirmPasswordErr === '') {
      const data = {
          'otpCode': `${this.state.otp}`,
          'newPass': `${this.state.password}`,
          'confirmPass': `${this.state.confirmPassword}`
      }
      await this.props.recoverPassword(data)
          .then(res => {

              sweetalert2.fire({
                  'text': 'Password changed successfully, you can now login'
              })
              setTimeout(() => { this.props.history.push('/login') }, 2000);
          }).catch(err => {
              sweetalert2.fire({
                  'text': `Error: ${err}`
              })
          })
  }
  else {
      sweetalert2.fire({
          'text': 'Please enter all the fields correctly'
      })
  }
}
  render() {
    return (
      <div>
      <Navbar  login={localStorage.getItem('login_user_data') ? 'true' : 'false'}/>
        <div className="row">
          <div className="col-4"></div>
          <div
          className="recover-password my-3 text-center col-lg-4 col-md-12"
          style={{ border: "1px groove", borderRadius:"5px", width: "" }}
        >
          <form>
            <div>
              <h3>Recover password</h3>
             <div className="mx-3"><hr/></div>
            </div>
            <div>
             
              <p style={{color:"red",fontSize:"13px"}}> <b>* Verification code has been sent to your registered mail ID</b></p>
            </div>
            <div className="mb-5 ml-3 mr-3 ">
              <FormControl className="form-control" variant="outlined" error={this.state.otpError ? true:false}
                                            onChange={this.handleotpChange} onBlur={this.handleotpChange}>
                <InputLabel htmlFor="outlined-adornment-otp">
                  Verification Code
                </InputLabel>
                <OutlinedInput
                  id="otp"
                  name="userotp"
                  type=""
                  onChange={this.handleChange}
                  // value={this.state.password}
                />
                 <FormHelperText id="component-error-text">{this.state.otpError}</FormHelperText>
              </FormControl>
            </div>
            <div className="mb-5 ml-3 mr-3">
              <FormControl className="formControl" variant="outlined" 
               error={this.state.passwordError ? true:false}
               onChange={this.handlepassChange} onBlur={this.handlepassChange}>
                <InputLabel htmlFor="outlined-adornment-password">
                 New Password
                </InputLabel>
                <OutlinedInput
                  id="password"
                  name="newPassword"
                  type={this.state.showPassword ? "text" : "password"}
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
                        {this.state.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={70}
                />
                 <FormHelperText id="component-error-text">{this.state.passwordError}</FormHelperText>
              </FormControl>
            </div>

            <div className="mb-5 ml-3 mr-3">
              <FormControl className="formControl" variant="outlined"  error={this.state.confirmPasswordError ? true:false}
               onChange={this.handlecpassChange} onBlur={this.handlecpassChange}>
                <InputLabel htmlFor="outlined-adornment-password">
                 Confirm Password
                </InputLabel>
                <OutlinedInput
                  id="password"
                  name="confirmPassword"
                  type={this.state.showPassword ? "text" : "password"}
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
                        {this.state.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={70}
                />
                <FormHelperText id="component-error-text">{this.state.confirmPasswordError}</FormHelperText>
              </FormControl>
            </div>
            <div className="btn btn-primary mb-4">submit </div>
          </form>
        </div>


          <div className="col-4"></div>

        </div>
        
        <Footer />
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    otpData:state.otpData.otpData
      };
  
  
}

const mapDispatchToProps = dispatch => {
  return {
    recoverPassword: (payload) => dispatch(actions.recoverPassword(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecoverPassword);
