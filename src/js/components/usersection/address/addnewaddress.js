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
import FormHelperText from'@material-ui/core/FormHelperText';

//imports of redux

import * as actions from '../../../redux/actions/addAddressAction';
import { connect } from 'react-redux';

export class Addnewaddress extends Component {

constructor(props) {
  super(props);

  this.state = {
    submitted:'',
    address:'',
    pincode:'',
    city:'',
    state:'',
    country:'',
     addressError:'',
     pincodeError:'',
     cityError:'',
     stateError:'',
     countryError:'',
  }
}

//this is to set state on change 
handleChange=(e) =>{
  const { name, value } = e.target;
  this.setState({ [name]: value });
  
}

 handleSubmit= async(e)=> {

this.handleAddressChange();
this.handleCityChange();
this.handleCountryChange();
this.handleStateChange();
  const data1 = localStorage.getItem('login_user_data');
  const userData = JSON.parse(data1);
  const user_token = userData.token
    e.preventDefault();
        this.setState({ submitted: true });
        const { address,pincode,city,state,country } = this.state;
         if (address && pincode && city && state && country) {
             try {
                 this.props.addAddress({address,pincode,city,state,country,user_token} );
                
             } catch (error) {
                 console.log(error);
                 return false
             }
            
            
    } 
 
    console.log(this.props.isAdded);
    
   
}

componentDidUpdate(prevProps){

  
}

componentDidMount(){
  const {isAdded}=this.props
  console.log(isAdded,"added address successfully");
  
  if(isAdded){
      console.log("redirected" );
   this.props.history.push('/Userdashboard')
 
  
  }
}
//functions for validations
handleAddressChange=(e)=>{
  if(this.state.address=='')
  {
      this.setState({addressError:'Please enter address'})      
  }
 
  else
  {
      this.setState({addressError:''})
  }
}

isNumber=(evt)=> {

  evt = (evt) ? evt : window.event;
  var charCode = (evt.which) ? evt.which : evt.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    
      this.setState({pincodeError:'* only numbers allowed'}) 

      return false;
  }
  else{
    this.setState({pincodeError:''})
    // return true;
  }

  
}

handleCityChange=(e)=>{
  if(this.state.city=='')
  {
      this.setState({cityError:'Please enter city name'})
      
  }
 
  else
  {
      this.setState({cityError:''})
  }
}

handleStateChange=(e)=>{
  if(this.state.state=='')
  {
      this.setState({stateError:'Please enter state'})
      
  }
 
  else
  {
      this.setState({stateError:''})
  }
}

handleCountryChange=(e)=>{
  if(this.state.country=='')
  {
      this.setState({countryError:'Please enter state'})
      
  }
 
  else
  {
      this.setState({countryError:''})
  }
}


  render() {
    const {address,pincode,city,state,country}=this.state;
    console.table(address,pincode,city,state,country,"sdssdsdsdsdsdsdsdsdsdsdsdsdsdsddsdsdsdsdsdsdsddsd")
    
    
    return (
      <div>
        <Navbar  login={localStorage.getItem('login_user_data') ? 'true' : 'false'}/>
        <div className="address  container mt-5 mb-5">
          <div className="row">
              <div className="col-12">
              <h4>My Account</h4>
            <hr />
              </div>
              </div>
            <div className="row">
              <div className="col-lg-3 col-md-12">
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
              <div className="col-lg-9 col-md-12" >
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
                        error={this.state.addressError ? true:false}
                        onChange={this.handleAddressChange} onBlur={this.handleAddressChange }
                        onChange={this.handleChange}
                        name="address"
                        />
                        <FormHelperText id="component-error-text">{this.state.addressError}</FormHelperText>
                        
                    </div>
                    <div className="mb-5">
                      <FormControl className="form-control" variant="outlined" error={this.state.pincodeError ? true:false}
                        onKeyUp={this.isNumber}>
                        <InputLabel htmlFor="outlined-adornment-email">
                         Pincode
                        </InputLabel>
                        <OutlinedInput
                          id="pincode"
                          name="pincode"
                          type="text"
                          onChange={this.handleChange}              
                          // value={this.state.password}        
                        />
                        <FormHelperText id="component-error-text">{this.state.pincodeError}</FormHelperText>
                      </FormControl>
                    </div>
                    <div className="row mb-5">
                    <div className="col-lg-3 col-md-12 my-3">
                    <FormControl className="form-control" variant="outlined"  
                      error={this.state.cityError ? true:false}
                      onChange={this.handleCityChange} onBlur={this.handleCityChange}>
                        <InputLabel htmlFor="outlined-adornment-email">
                       city
                        </InputLabel>
                        <OutlinedInput
                          id="city"
                          name="city"
                          type="text"
                          onChange={this.handleChange}              
                          // value={this.state.password}        
                        />
                         <FormHelperText id="component-error-text">{this.state.cityError}</FormHelperText>
                      </FormControl>
                    </div>
                    <div className="col-lg-3 col-md-12 my-3 ">
                    <FormControl className="form-control" variant="outlined" 
                     error={this.state.stateError ? true:false}
                     onChange={this.handleStateChange} onBlur={this.handleStateChange}>
                        <InputLabel htmlFor="outlined-adornment-email">
                         state
                        </InputLabel>
                        <OutlinedInput
                          id="state"
                          name="state"
                          type="text" 
                          onChange={this.handleChange}             
                          // value={this.state.password}        
                        />
                        <FormHelperText id="component-error-text">{this.state.stateError}</FormHelperText>
                      </FormControl>
                    </div>
                    </div>
                    <div className="mb-5">
                    <FormControl className="form-control" variant="outlined" 
                     error={this.state.countryError ? true:false}
                     onChange={this.handleCountryChange} onBlur={this.handleCountryChange}>
                        <InputLabel htmlFor="outlined-adornment-email">
                        country
                        </InputLabel>
                        <OutlinedInput
                          id="country"
                          name="country"
                          type="text"   
                          onChange={this.handleChange}           
                          // value={this.state.password}        
                        />
                         <FormHelperText id="component-error-text">{this.state.countryError}</FormHelperText>
                      </FormControl>
                    </div>
                    <div><hr/></div>
                    <div className="mb-2">
                        <button className="btn" onClick={this.handleSubmit}>Save</button>
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


const mapStateToProps = state => {
  return {
    isAdded:state.Address.isAdded,
    
  }; 
}

const mapDispatchToProps = dispatch => {
  return {
    addAddress:(payload)=> dispatch(actions.addAddress(payload)) ,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Addnewaddress);

