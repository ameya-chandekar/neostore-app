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

import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

// import { connect } from "react-redux";
// import * as actions from "";
 class RecoverPassword extends Component {
  constructor(props) {
    super(props);
    // this.props.logout();

    this.state = {
      showPassword: false,

      submitted: false
    };
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

  render() {
    return (
      <div>
        <Navbar />
        <div
          className="recover-password mt-3 mb-3 text-center ml-auto mr-auto"
          style={{ border: "1px groove", borderRadius:"5px", width: "40%" }}
        >
          <form>
            <div>
              <h3>Recover password</h3>
             <div><hr/></div>
            </div>
            <div>
              {" "}
              <p> Verification code has been sent to your registered mail ID</p>
            </div>
            <div className="mb-5 ml-3 mr-3 ">
              <FormControl className="form-control" variant="outlined">
                <InputLabel htmlFor="outlined-adornment-otp">
                  Verification Code
                </InputLabel>
                <OutlinedInput
                  id="otp"
                  name="userotpname"
                  type=""
                  // value={this.state.password}
                />
              </FormControl>
            </div>
            <div className="mb-5 ml-3 mr-3">
              <FormControl className="formControl" variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                 New Password
                </InputLabel>
                <OutlinedInput
                  id="password"
                  name="password"
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
              </FormControl>
            </div>

            <div className="mb-5 ml-3 mr-3">
              <FormControl className="formControl" variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                 Confirm Password
                </InputLabel>
                <OutlinedInput
                  id="password"
                  name="password"
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
              </FormControl>
            </div>
            <div className="btn btn-primary mb-4">submit </div>
          </form>
        </div>

        <Footer />
      </div>
    );
  }
}

export default RecoverPassword;
