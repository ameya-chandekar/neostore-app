import React, { Component } from 'react'
import Navbar from '../../navbar/navbar'
import Footer from '../footer'
import "../contactUs/contactUs.css"
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
export class ContactUs extends Component {
    render() {
        return (
            <div className="contact-us">
                <Navbar />
                <div className="contact-us-wrapper row">
                <div className="contact-us-form col-lg-12">
                    <form class="contact-form mt-5 mb-5">
                        <div className="row form-item">
                           <div className="col-12 text-center"> <h1> <b>Contact Form</b></h1></div>
                        </div>
                    <div className="row">
                        <div className="col-12">
                        <div class="form-label-group form-item mt-3 mb-3">
                         <FormControl className="form-control" variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-email">Name</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-email"
                                    type="text"
                                    // value={this.state.password}
                                    labelWidth={70} />
                            </FormControl>
                        </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                        <div class="form-label-group form-item mt-3 mb-3">
                         <FormControl className="form-control" variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-email"
                                    type="text"
                                    // value={this.state.password}
                                    labelWidth={70} />
                            </FormControl>
                        </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                        <div class="form-label-group form-item mt-3 mb-3">
                         <FormControl className="form-control" variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-email">Mobile Number</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-email"
                                    type="text"
                                    // value={this.state.password}
                                    labelWidth={70} />
                            </FormControl>
                        </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                        <div class="form-label-group form-item mt-3 mb-3">
                         <FormControl className="form-control" variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-email">Subject</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-email"
                                    type="text"
                                    // value={this.state.password}
                                    labelWidth={70} />
                            </FormControl>
                        </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                        <div class="form-label-group form-item mt-3 mb-3">
                         <FormControl className="form-control" variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-email">Message</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-email"
                                    type="text"
                                    // value={this.state.password}
                                    labelWidth={70} />
                            </FormControl>
                        </div>
                        </div>
                    </div>
                       

                    <div className="row form-item mt-3 mb-3">
                        <div className="col-12 text-center ">
                        <button class="btn btn-lg btn-danger text-uppercase " type="submit">Submit</button>
                        </div>
                    </div>
                    </form>
                </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default ContactUs
