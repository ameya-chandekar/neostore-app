import React, { Component } from "react";
import Navbar from "../../navbar/navbar";
import Footer from "../../footer/footer";

// material ui
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


export class Addnewaddress extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="address  container mt-5 mb-5">
          <div className="row">
              <div className="col">
              <h4>My Account</h4>
            <hr />
              </div>
              </div>
            <div className="row">
              <div className="col-lg-3">
              <ExpansionPanel>
              <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header">
                            <Typography >Orders</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails >
                            <div className="btn " style={{width:"100%" ,height:"100%"}}> <b>Orders</b></div>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>


                    <ExpansionPanel>
                    <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header">
                            <Typography >Account</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails >
                            <div className="btn " style={{width:"100%" ,height:"100%"}}> <b>Profile</b></div>
                            <div className="btn " style={{width:"100%" ,height:"100%"}}> <b>Addresses</b></div>
                            
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
              </div>
              <div className="col-lg-9" >
                <form>
                  <div className="p-3 " style={{border:"1px groove ",borderRadius:"5px"}}>
                    <div className="">
                      <h3>Add new address</h3>
                    </div>
                    <hr />
                    <div className="mb-3">
                      <TextareaAutosize
                        aria-label="minimum height"
                        rowsMin={3}
                        placeholder="Address"
                      />
                      
                    </div>
                    <div className="mb-5">
                      <FormControl className="form-control" variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-email">
                         Pincode
                        </InputLabel>
                        <OutlinedInput
                          id="username"
                          name="username"
                          type="text"              
                          // value={this.state.password}        
                        />
                      </FormControl>
                    </div>
                    <div className="row mb-5">
                    <div className="col-3 ">
                    <FormControl className="form-control" variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-email">
                       city
                        </InputLabel>
                        <OutlinedInput
                          id="username"
                          name="username"
                          type="text"              
                          // value={this.state.password}        
                        />
                      </FormControl>
                    </div>
                    <div className="col-3 ">
                    <FormControl className="form-control" variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-email">
                         state
                        </InputLabel>
                        <OutlinedInput
                          id="username"
                          name="username"
                          type="text"              
                          // value={this.state.password}        
                        />
                      </FormControl>
                    </div>
                    </div>
                    <div className="mb-5">
                    <FormControl className="form-control" variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-email">
                        country
                        </InputLabel>
                        <OutlinedInput
                          id="username"
                          name="username"
                          type="text"              
                          // value={this.state.password}        
                        />
                      </FormControl>
                    </div>
                    <div><hr/></div>
                    <div className="mb-2">
                        <button className="btn"> Save</button>
                        <button className="btn"> Cancel</button>
                    </div>

                  </div>
                </form>
              </div>
            </div>
          
        </div>
        <Footer /> 
      </div>
    );
  }
}

export default Addnewaddress;
