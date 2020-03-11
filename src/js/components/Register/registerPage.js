import React, { Component } from 'react'
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import TextFieldsIcon from '@material-ui/icons/TextFields';
import CallIcon from '@material-ui/icons/Call';
import Input from "@material-ui/core/Input";
import FilledInput from "@material-ui/core/FilledInput";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import MailIcon from '@material-ui/icons/Mail';
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import "../Register/registerPage.css"
export class RegisterPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showPassword: false
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

    render() {
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
                                        <form class="form-signin">
                                            <div class="form-label-group">
                                                {/* <input type="email" id="inputEmail" class="form-control mt-3 mb-4 pt-4 pb-4" placeholder="Email Address" required autofocus /> */}
                                                <FormControl className="form-control" variant="outlined">
                                                    <InputLabel htmlFor="outlined-adornment-email">First Name</InputLabel>
                                                    <OutlinedInput
                                                        id="outlined-adornment-email"
                                                        type="text"
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
                                                        value={this.state.password}
                                                        onChange={""}
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
                                                        value={this.state.password}
                                                        onChange={""}
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


                                            {/* <FormControl component="fieldset">
                                                <FormLabel component="legend">Gender</FormLabel>
                                                <RadioGroup defaultValue="female" aria-label="gender" name="customized-radios">
                                                    <FormControlLabel value="female" control={<StyledRadio />} label="Female" />
                                                    <FormControlLabel value="male" control={<StyledRadio />} label="Male" />
                                                    <FormControlLabel value="other" control={<StyledRadio />} label="Other" />
                                                    <FormControlLabel
                                                        value="disabled"
                                                        disabled
                                                        control={<StyledRadio />}
                                                        label="(Disabled option)"
                                                    />
                                                </RadioGroup>
                                            </FormControl> */}
                                            <div>
                                            <button class="btn btn-danger text-uppercase float-left" type="submit">Register</button>
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

export default RegisterPage
