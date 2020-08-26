import React, { Component } from 'react';
// import userIcon from '../../assets/images/profile-placeholder.png';
// import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
// import ReorderIcon from '@material-ui/icons/Reorder';
// import PersonIcon from '@material-ui/icons/Person';
// import MenuBookIcon from '@material-ui/icons/MenuBook';
// import SyncAltIcon from '@material-ui/icons/SyncAlt';
// import UserProfile from '../UserProfile/UserProfile';
import UserOption from './useroptions/usersoption'
import Navbar from '../navbar/navbar';
// import { addCustomerAddress, getCustomerAddress, editCustomerAddress } from '../../api/api';
// import sweetalert2 from 'sweetalert2';


import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
export class EditAddress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address: '',
            pincode: '',
            city: '',
            state: '',
            country: '',
            pincodeErrorMessage: ''

        }
    }

    editHandler = async (e) => {

        e.preventDefault();
        // const [address,pincode,city,state,country]=this.state
        const Address = this.state.address;
        const pincode = this.state.pincode;
        const city = this.state.city;
        const state = this.state.state;
        const country = this.state.country;

        if (!pincode.length === 6 || isNaN(pincode)) {
            this.setState({
                pincodeErrorMessage: 'Pincode should be exact 6 numeric digits'
            })
        }

        else {
            this.setState({
                pincodeErrorMessage: ''
            })
            const userAddress = localStorage.getItem('editAddress');
            console.log('userAddress in editAddress', userAddress);
            const address = JSON.parse(userAddress);
            const data = {
                'address_id': `${address.address_id}`,
                'address': `${Address}`,
                'pincode': `${pincode}`,
                'city': `${city}`,
                'state': `${state}`,
                'country': `${country}`
            }
            const data1 = localStorage.getItem('login_user_data');
            const Data = JSON.parse(data1);
            const user_token = Data.token
       this.props.updateAddress({data ,user_token})

       .then(result => {
        
                    
                })
                
                .catch(err => {
                    alert(`OOps.. some error occured. Details: ${err}`)
                })   
    //    .then(res => {
    //                 sweetalert2.fire({
    //                     "title": 'Address edited successfully',
    //                     'text': 'Congratulations, your address has been edited',
    //                     "icon": 'success'
    //                 })
    //                 this.props.history.push('/address');

    //             })
    //             .catch(err => {
    //                 sweetalert2.fire({
    //                     "title": 'OOPS, Error occured',
    //                     'text': `Please check the Error :- ${err}`,
    //                     "icon": 'error'
    //                 })
    //             })
        }
    }

    componentWillUnmount() {
        localStorage.removeItem('editAddress')
    }


    render() {
        const data1 = localStorage.getItem('login_user_data')
        const userData = JSON.parse(data1);


        const userAddress = localStorage.getItem('editAddress');
        const address = JSON.parse(userAddress);

        return (
            <div>

                <Navbar login={localStorage.getItem('login_user_data') ? 'true' : 'false'} />
                {userData ?
                    <div className="container m-4">
                        <div className="row">
                            <div className="col-12">
                                <h1>My Account</h1>
                            </div>


                        </div><hr />

                        <div className="row">
                            <div className="col-4 text-center">
                                <UserOption />
                            </div>
                            <div className="col-8 mt-2">

                                <div className="container">


                                    <div>
                                        <div className="container" style={{ border: "1px groove", borderRadius: "5px" }}>
                                            <form>
                                                <div className="form-group mt-3">
                                                    <label className="lead"> Enter Address</label>
                                                    <input type="text" className="form-control" defaultValue={address.address} onChange={(e) => { this.setState({ address: e.target.value }) }} />
                                                </div>
                                                <div className="form-group mt-3">
                                                    <label className="lead"> Enter Pincode</label>
                                                    <input type="text" className="form-control" defaultValue={address.pincode} onChange={(e) => { this.setState({ pincode: e.target.value }) }} />
                                                    <span className="text-danger">{this.state.pincodeErrorMessage}</span>
                                                </div>
                                                <div className="form-group mt-3">
                                                    <label className="lead"> Enter City Name</label>
                                                    <input tpye='text' className="form-control" defaultValue={address.city} onChange={(e) => { this.setState({ city: e.target.value }) }} />
                                                </div>
                                                <div className="form-group mt-3">
                                                    <label className="lead"> Enter State</label>
                                                    <input type='text' className="form-control" defaultValue={address.state} onChange={(e) => { this.setState({ state: e.target.value }) }} />
                                                </div>
                                                <div className="form-group mt-3">
                                                    <label className="lead"> Enter Country</label>
                                                    <input type='text' className="form-control" defaultValue={address.country} onChange={(e) => { this.setState({ country: e.target.value }) }} />
                                                </div>
                                                <div className="form-group mt-3 mb-3">
                                                    <button className="btn mx-2 " style={{ border: "1px groove", borderRadius: "5px" }} onClick={this.editHandler}><i class="fa fa-floppy-o m-1" aria-hidden="true" />Save</button>
                                                    <button className="btn mx-2" style={{ border: "1px groove", borderRadius: "5px" }}><i class="fa fa-times m-1" aria-hidden="true" />Cancel</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>


                                </div>

                            </div>
                        </div>
                    </div> : <div>
                        <div className="container text-center mt-5 mb-5">
                            <h5>Hi guest, sorry but you are not logged in..</h5>
                            <h5>Please Login to continue to orders Page</h5>
                            <Link to="/login" className="btn btn-warning m-4">Go to Login Page</Link>
                        </div>
                    </div>}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        address: state.Address.Addresses,
        isUpdated: state.Address.isUpdated,

    }


}
const mapDispatchToProps = dispatch => {
    return {
        updateAddress:(payload)=>dispatch(actions.updateAddress(payload)),
    

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditAddress);



