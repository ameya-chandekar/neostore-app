import React, { Component } from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer'
// import { getCustomerAddress, updateAddress, addToCartApi } from '../../api/api';
import sweetalert2 from 'sweetalert2';
import { Link } from 'react-router-dom';

//redux
import { connect } from 'react-redux';
// import * as actions from '../../../redux/actions';
import * as actions from '../../redux/actions';
import * as action from '../../redux/actions/updateAddressAction';
import * as actionss from '../../redux/actions/placeOrderAction';
import {
    Button,
    RadioGroup,
    FormLabel,
    FormControl,
    FormControlLabel,
    Radio,
    OutlinedInput
} from '@material-ui/core';
export class SelectAddress extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: false,
            id: '',
            show: false
        }

    }

    // For getting address details on component mount
    async componentDidMount() {
        if (localStorage.getItem('login_user_data')) {
            const data1 = localStorage.getItem('login_user_data');
            const userData = JSON.parse(data1);
            const user_token = userData.token
            await this.props.getAddress({ user_token })
            const { address } = this.props
            console.log(address, "proceed to checout page")
        }

        else {
            sweetalert2.fire({
                'text': 'Please Login first to proceed',
                'icon': 'warning'
            })
        }
    }
    // componentDidUpdate() {
    //     const data1 = localStorage.getItem('login_user_data');
    //     const userData = JSON.parse(data1);
    //     const user_token = userData.token
    //     this.props.getAddress({user_token})
    //     const {address}=this.props
    //     console.log(address,"vadvavadvavdavdvadvavd") 
    // }
// For handling select address from selected address
selectAddress = (el) => {
    const data = {
        'address': `${el.address}`,
        'address_id': `${el.address_id}`,
        'city': `${el.city}`,
        'country': `${el.country}`,
        'state': `${el.state}`,
        'isDeliveryAddress': true,
        'pincode': `${el.pincode}`,

    }
    const data1 = localStorage.getItem('login_user_data');
    const userData = JSON.parse(data1);
    const user_token = userData.token
    this.props.updateAddress({data ,user_token})
   
    if(true)
    {
        this.setState({ show: true })
        sweetalert2.fire({text:'You Can Proceed to buy now'})
    }
    else{
        alert(`Oops... some error occured. Details : `)
    }



}


// Handler for radio input selection

radioHandler = (e, id) => {
    !this.state.id ? this.setState({
        checked: !this.state.checked,
        id: id
    }) : this.setState({ id: id, checked: !this.state.checked })
}

// Proceed to checkout handler for onClick event
// proceedCheckout = async(e) => {
//     e.preventDefault();
//     const data = localStorage.getItem('cart') ? localStorage.getItem('cart') : [];

//     const data1 = data ? JSON.parse(data) : []
//     data1.push({ flag: 'checkout' })
//     const data2 = localStorage.getItem('login_user_data');
//     const userData = JSON.parse(data2);
//     const user_token = userData.token
//     const placeOrder=this.props.placeOrder()
//     await  placeOrder({data1,user_token})
//     .then(result => {

//         localStorage.setItem('cart', [[]])
//         this.props.history.push('/thanksPage')
//         this.setState({ show: true })
//     }).catch(err => {
//         alert(`OOps.. some error occured. Details: ${err}`)
//     })

// }
proceedCheckout = async(e) => {
    e.preventDefault();
    const data = localStorage.getItem('cart') ? localStorage.getItem('cart') : [];

    const data1 = data ? JSON.parse(data) : []
    data1.push({ flag: 'checkout' })
    const data2 = localStorage.getItem('login_user_data');
    const userData = JSON.parse(data2);
    const user_token = userData.token
    console.log(user_token,"token on place order")
    this.props.placeOrder({data1,user_token});
    // await  placeOrder(data1,user_token)
    // .then(result => {

    //     localStorage.setItem('cart', [[]])
    //     this.props.history.push('/thanksPage')
    //     this.setState({ show: true })
    // }).catch(err => {
    //     alert(`OOps.. some error occured. Details: ${err}`)
    // })

}

render() {
    const steps = ['Cart', 'Delivery Address'];
    const {address}=this.props
    const add =address.customer_address
    return (
        <div>
            <Navbar login={localStorage.getItem('login_user_data') ? 'true' : 'false'} />
            <div className="container-fluid">
                <div className="row">
                    <Stepper activeStep={1} style={{ width: "100%" }}>
                        {steps.map(label => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </div>
            </div>
            <div className="container">

                <div className="mt-4 mb-4" style={{ border: "1px groove", borderRadius: "5px" }}>
                    <div className="card-Navbar"><h2>Addresses</h2></div>
                    {add? add.map(el => {
                        return <div className="">
                            <div className=" card-body m-2" style={{ border: "1px groove", borderRadius: "5px" }}>
                                <div className="row m-1">
                                    <div className="col-12">
                                        <span className="add">{el.address}
                                        </span>
                                    </div>

                                </div>
                                <div className="row m-1">
                                    <div className="col-11">
                                        <span className="city">{el.city}</span> <span className="pincode">{el.pincode}</span>
                                    </div>
                                </div>
                                <div className="row m-1">
                                    <div className="col-11">
                                        <span className="state">{el.state}</span> <span className="country">{el.country}</span>
                                    </div>

                                </div>

                                {/* <div><FormControl className="mb-3" >
                                        <RadioGroup aria-label="gender" name="gender1"  onChange={(e) => this.selectAddress(el)} >
                                            <FormControlLabel   control={<Radio />}/>
                                          
                                        </RadioGroup>

                                    </FormControl></div> */}
                                <div className="row m-1">
                                    <div className="col-2">
                                        <input type="checkbox" onChange={(e) => this.selectAddress(el)} />
                                    </div>
                                    <div className="col-10" >
                                        <Link to="/editAddress" onClick={localStorage.setItem('editAddress', JSON.stringify(el))} className="btn btn-primary px-3">Edit</Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                    }) : <div className="text-center">
                            <h2>No address found</h2>

                        </div>}
                    <div className="col-12 mt-3 mb-2">
                        <Link to="/addAddress" className="btn btn-light">Add Address</Link>
                        <button className="btn" disabled={!this.state.show} onClick={(e) => this.proceedCheckout(e)}>Proceed to buy</button>
                    </div>
                </div>

            </div>
            <Footer/>
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
        getAddress: (payload) => dispatch(actions.getAddress(payload)),
        updateAddress:(payload)=>dispatch(action.updateAddress(payload)),
        placeOrder:(payload)=>dispatch(actionss.placeOrder(payload)),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectAddress);
