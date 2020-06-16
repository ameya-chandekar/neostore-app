import React, { Component } from 'react';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer'
// import { forgotPassword } from '../../api/api';
import sweetalert2 from 'sweetalert2';

//redux
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/forgotPasswordAction';

export class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            emailErr: ''
        }

    }


    handlechange = (e) => {
        this.setState({
            email: e.target.value
        })
        
    }

   
    handleSubmit = async (e) => {
        const mailformat = /^([a-zA-Z])+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/;
        e.preventDefault();
        if(this.state.email===""){
            this.setState({emailErr:"Please enter email Id"})
        }
        else if(this.state.email.match(mailformat)==null){
            this.setState({emailErr:'Invalid email id'})
        }
        else{
            this.setState({emailErr:""})
        }
        if (this.state.emailErr === '') {
            const data = {
                "email": `${this.state.email}`
            }
            
          if(this.props.onForgotPassword(data)) 
           {
                const tokendata = this.props.otpData
                console.log("token for password",tokendata.token)
       
        
        localStorage.setItem('token', tokendata.token)
               sweetalert2.fire({
                   'text': 'Code has been sent'
               
               
           })
           setTimeout(() => { this.props.history.push('/recoverPassword') }, 5000)
        }   
         else{  
                    
                    sweetalert2.fire({
                        'text': `Some error occured `
                    })
                }
        }
        else {
            
            sweetalert2.fire({
                'text': 'Please enter email id correctly'

            })
        }
    }

    render() {
        return (
            <div>
                <Navbar login={localStorage.getItem('loginUserData') ? 'true' : 'false'} />
                <div className=" form-group m-5 " style={{border:"1px groove" ,borderRadius:"5px",width:"50%"}}>
                    <div className=""><h1 className="text-center">Recover Password</h1></div>
                    <hr />
                    <div className="">
                        
                            <input type="text" className="form-control ml-5" placeholder="Enter your email" style={{width:"80%"}} onChange={(e) => this.handlechange(e)} />
                            <span className="form-helper-text text-danger">{this.state.emailErr}</span><br/>
                            <button type="submit" onClick={(e) => this.handleSubmit(e)} className="btn btn-primary ml-5 m-3">Submit</button>
                       
                    </div>
                </div>
            </div>
        )
    }
}



const mapStateToProps = state => {
    return {
      otpData:state.otpData.otpData
        };
    
    
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      onForgotPassword: (payload) => dispatch(actions.forgotPassword(payload))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
