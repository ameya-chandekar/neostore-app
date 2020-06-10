import React, { Component } from 'react'

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
import { API } from '../../../api/api';


//redux
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions/changePasswordAction';


 class ChangePassword extends Component {
constructor(props) {
    super(props)
    this.state = {
        showPassword: false,
        oldPassword:'',
        newPassword:'',
        cPassword:'',
        oldpassError:'',
        newPassError:'',
        cPassError:'',


            }
}


//this to set state as per value
handleChange=(e) =>{
    const { name, value } = e.target;
    this.setState({ [name]: value });
    
}

//submition of form
handleSubmit=()=>{
    const data1 = localStorage.getItem('login_user_data');
    const userData = JSON.parse(data1);
    const user_token = userData.token
    const {oldPassword,newPassword,cPassword}=this.state
    this.props.changePass({oldPassword,newPassword,cPassword,user_token})
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


//function for validation
handleoldpassChange=(e)=>{
    if(e.target.value==''){
        this.setState({oldpassError:'old paswwor required'})
    }
    else{
        this.setState({oldpassError:''})
    }
}


handleNewPassChange=(e)=>{
    const  cond = /^[A-Za-z]\w{7,11}$/;
     if(e.target.value=='')
     {
         this.setState({newPassError:'Please enter password '})
     }
     else if(e.target.value.match(cond))
     {
         this.setState({newPassError:''})
     }
     else
     {
         this.setState({newPassError:'password should have 8-12 characters and should contain only aplhanumeric values'})
     }
  }

  
  handleCPassChange=(e)=>{
  
    if(e.target.value=='')
   {
     this.setState({cPassError:'Please enter confirm password '})
   }
   else if(this.state.newPassword==this.state.cPassword){
     this.setState({cPassError:''})
   }
 else if(this.state.newPassword!=this.state.cPassword){
   this.setState({cPassError:'should match with new password'})
 }
   else
    {
        this.setState({cPassError:''})
    }
 }

    render() {
        return (
            <div>
                <div className="text-center " style={{border:"1px groove" ,borderRadius:"5px"}}>
                   <div className="m-3"><h2>ChangePassword</h2></div> 
                    <div className="mr-3 ml-3"><hr/></div>
                    <div class="  m-3">
                                            {/* <input type="password" id="inputPassword" class="form-control mb-3 pt-4 pb-4" placeholder="Password" required /> */}
                                            <FormControl className="formControl" variant="outlined" error={this.state.oldpassError ? true:false}
               onChange={this.handleoldpassChange} onBlur={this.handleoldpassChange}>
                                                <InputLabel htmlFor="outlined-adornment-password"> Old Password</InputLabel>
                                                <OutlinedInput
                                                    id="password"
                                                    name="oldPassword"
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
                                                                 <FormHelperText id="component-error-text">{this.state.oldpassError}</FormHelperText>

                                            </FormControl>
                                        </div>

                                        <div class=" m-3">
                                            {/* <input type="password" id="inputPassword" class="form-control mb-3 pt-4 pb-4" placeholder="Password" required /> */}
                                            <FormControl className="formControl" variant="outlined"
                                             error={this.state.newPassError ? true:false}
                                             onChange={this.handleNewPassChange} onBlur={this.handleNewPassChange}>
                                                <InputLabel htmlFor="outlined-adornment-password">New Password</InputLabel>
                                                <OutlinedInput
                                                    id="password"
                                                    name="newPassword"
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
                                                 <FormHelperText id="component-error-text">{this.state.newPassError}</FormHelperText>

                                            </FormControl>
                                        </div>

                                        <div class=" m-3">
                                            {/* <input type="password" id="inputPassword" class="form-control mb-3 pt-4 pb-4" placeholder="Password" required /> */}
                                            <FormControl className="formControl" variant="outlined"
                                             error={this.state.cPassError ? true:false}
                                             onChange={this.handleCPassChange} onBlur={this.handleCPassChange}>
                                                <InputLabel htmlFor="outlined-adornment-password"> Confirm Password</InputLabel>
                                                <OutlinedInput
                                                    id="password"
                                                    name="cPassword"
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
                                                 <FormHelperText id="component-error-text">{this.state.cPassError}</FormHelperText>
                                            </FormControl>
                                        </div>
                                        <div className="btn btn-primary m-3" onClick={this.handleSubmit}> submit</div>
                </div>
            </div>
        )
    }
}


// const mapStateToProps = state => {
//     return {
//       cartProducts: state.cart.cartProductdetails,
  
//     };
  
  
//   }
  
  const mapDispatchToProps = dispatch => {
    return {
        changePass: (payload) => dispatch(actions.changePassword(payload)),
    }
  }
  
  export default connect(null, mapDispatchToProps)(ChangePassword); 
