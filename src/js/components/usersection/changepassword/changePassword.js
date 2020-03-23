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
 class ChangePassword extends Component {
constructor(props) {
    super(props)
    this.state = {
        showPassword: false,
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

    render() {
        return (
            <div>
                <div className="">
                    <h2>ChangePassword</h2>
                    <hr/>
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
                </div>
            </div>
        )
    }
}

export default ChangePassword
