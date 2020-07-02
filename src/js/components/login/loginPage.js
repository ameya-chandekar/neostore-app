import React, { Component } from 'react'
// import clsx from "clsx";
// import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import { Link } from 'react-router-dom'
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

//redux
import { connect } from 'react-redux';
import * as actions from '../../redux/actions'
import FormHelperText from '@material-ui/core/FormHelperText'

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
            submitted: false,
            emailErrorText: '',
            passErrorText: '',
            cartdata: [],
            // errormsg:"czxsc"
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
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });

    }
    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        if (username && password) {
            this.props.onLogIn({ username, password })
                .then(result => {
                    const { userdetails } = this.props
                    localStorage.setItem('login_user_data', JSON.stringify(userdetails))
                    const data1 = localStorage.getItem('login_user_data');
                    const userData = JSON.parse(data1);
                    const user_token = userData.token
                    this.props.getCartProduct({ user_token })
                        .then(result => {
                            // The checkClient call is now done!
                            this.setState({
                                cartdata: this.props.cartdata
                            })
                            let {cartdata}=this.props
                            console.log(`success: ${JSON.stringify(cartdata)}`);

                            let finalData = cartdata ? cartdata.map((product) => {
                                product._id = product.product_id._id;
                                return product
                            }) : [];
                            localStorage.setItem("cart", JSON.stringify(finalData));
                            // let cartdata=this.prop.cartdata?this.prop.cartdata:[];
                            // console.log(this.state.cartdata, "data to add in cart")
                            // Do something
                            this.props.history.push('/')
                        })

                    console.log(this.props.isLogin, "islogin?");
                })
                .catch((error) => {
                    return error;
                })
        }
    }

    componentDidUpdate(prevProps) {
        // if (this.props.isLogin) {
        //     console.log("redirected");
        //     console.log("user response after login ----------------", this.props.userdetails);
        //     const { userdetails } = this.props

        //     localStorage.setItem('login_user_data', JSON.stringify(userdetails))

        //     this.props.history.push('/')

        // }
    }

    // Functions for validation

    handleEmailChange = (e) => {
        if (e.target.value == '') {
            this.setState({ emailErrorText: 'Please enter Email ' })
        }
        else if (/^([a-zA-Z])+([0-9a-zA-Z\.\-])+\@+(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,10})+$/.test(e.target.value)) {
            this.setState({ emailErrorText: '' })
        }
        else {
            this.setState({ emailErrorText: 'Enter a valid email' })
        }
    }
    handlePassChange = (e) => {
        const cond = /^[A-Za-z]\w{7,11}$/;
        if (e.target.value == '') {
            this.setState({ passErrorText: 'Please enter password ' })
        }
        else if (e.target.value.match(cond)) {
            this.setState({ passErrorText: '' })
        }
        else {
            this.setState({ passErrorText: 'password should have 8-12 characters and should contain only aplhanumeric values' })
        }
    }

    render() {

        // console.log("login responseeee",this.props.userdetails);

        // console.log("username",this.state.username);
        // console.log("password",this.state.password);
        // console.log("user response after login",this.props.userdetails.token)
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
                                        <button className="btn google-btn" onClick={renderProps.onClick} disabled={renderProps.disabled}><b><i class="fa fa-google"></i> Login With Google</b></button>
                                    )}
                                    buttonText="Login"
                                    onSuccess={responseGoogle}
                                    onFailure={responseGoogle}
                                    cookiePolicy={'single_host_origin'}
                                />
                                <div className="row"><div className="col-12 "><button className="btn btn-lg btn- social-login"><h6>Login With Twiiter</h6></button></div></div>

                            </div>

                        </div>
                        <div className="col-lg-6 col-md-12 login-card mt-3">

                            <div class=" card-signin my-5">
                                <div class="">
                                    <h3 class=" card-title text-left">
                                        <b>Login to NeoSTORE</b></h3>
                                    <form class="form-signin" onSubmit={this.handleSubmit}>
                                        <div class="mb-3 mt-3">
                                            {/* <input type="email" id="inputEmail" class="form-control mt-3 mb-4 pt-4 pb-4" placeholder="Email Address" required autofocus /> */}
                                            <FormControl className="form-control" variant="outlined" error={this.state.emailErrorText ? true : false}
                                                onChange={this.handleEmailChange} onBlur={this.handleEmailChange}>
                                                <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
                                                <OutlinedInput
                                                    id="username"
                                                    name="username"
                                                    type="text"
                                                    onChange={this.handleChange}
                                                    errorText={this.state.errormsg}
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
                                                <FormHelperText id="component-error-text">{this.state.emailErrorText}</FormHelperText>
                                            </FormControl>
                                        </div>

                                        <div class="mb-3 mt-5">
                                            {/* <input type="password" id="inputPassword" class="form-control mb-3 pt-4 pb-4" placeholder="Password" required /> */}
                                            <FormControl className="formControl" variant="outlined" error={this.state.passErrorText ? true : false}
                                                onChange={this.handlePassChange} onBlur={this.handlePassChange}>
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
                                                <FormHelperText id="component-error-text">{this.state.passErrorText}</FormHelperText>
                                            </FormControl>
                                        </div>
                                        <div>
                                            <button class="btn btn-danger text-uppercase float-left mb-5" type="submit">Login</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row " >
                        <div className="col-lg-12 d-flex justify-content-center">
                            <Link to="/RegisterPage">   <button className="btn">Register Now</button> </Link> <span style={{ marginTop: "7px" }}>|</span>
                            <Link to="/forgotPassword">   <button className="btn">Forgot Password</button></Link>
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
        isLogin: state.login.isLogin,
        userdetails: state.login.userdetails,
        cartdata: state.cart.cartProductdetails.product_details,
        isAdded: state.cart.isAdded

    };

}

const mapDispatchToProps = dispatch => {
    return {
        onLogIn: (payload) => dispatch(actions.login(payload)),
        getCartProduct: (payload) => dispatch(actions.getCartProduct(payload)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
//   export default LoginPage


