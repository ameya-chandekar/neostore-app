import React, { Component } from 'react'
import { connect } from 'react-redux';
// import * as actions from '../../../redux/actions';
import * as actions from '../../../redux/actions';

import{Link} from 'react-router-dom'

export class ShowAddress extends Component {

    handleDelete=(addressid)=>{
        console.log(addressid);
        const data1 = localStorage.getItem('login_user_data');
        const userData = JSON.parse(data1);
        const user_token = userData.token
        this.props.deleteAddress({addressid,user_token});
    }

    componentDidMount(){
        const data1 = localStorage.getItem('login_user_data');
        const userData = JSON.parse(data1);
        const user_token = userData.token
        this.props.getAddress({user_token})
        const {address}=this.props
        console.log(address,"vadvavadvavdavdvadvavd") 
    }
    
  componentDidUpdate() {
    const data1 = localStorage.getItem('login_user_data');
    const userData = JSON.parse(data1);
    const user_token = userData.token
    this.props.getAddress({user_token})
    const {address}=this.props
    console.log(address,"vadvavadvavdavdvadvavd") 
}
    render() {
        const {address}=this.props
        const add =address.customer_address
        console.log(address,"vadvavadvavdavdvadvavd") 
        return (
            <div>
                <div className="addresses " style={{border:"1px groove",borderRadius:"5px"}}>
                    <div className="m-3"><h3>Addresses</h3></div>
                   
                    {
                  // console.log(subimages,"for map") 
               add?add.map((el)=>{
                  console.log(el,"masderedafafjfaschoddddd")
                return(
                    <div className="address m-2" style={{border:"1px groove",borderRadius:"5px"}}>
                        <div className="row m-1">
                            <div className="col-11">
                            <span className="add">{el.address}
                        </span>
                            </div>
                            <div className="col-1">
                                <div className="btn btn-danger" onClick={()=>this.handleDelete(el.address_id)}>✘</div>
                            </div>
                        </div>
                        <div className="row m-1">
                        <div className="col-11">
                        <span className="city">{el.city} </span> <span className="pincode">{el.pincode}</span>
                        </div>
                        </div>
                        <div className="row m-1">
                        <div className="col-11">
                        <span className="state">{el.state}</span> <span className="country">{el.country}</span>
                        </div>
                        </div>
                        <div className="row m-1">
                        <div className="col-11">
                        <div className="btn btn-primary px-3">Edit</div>
                        </div>
                        </div>
                    </div>
                )  
                }):null
                }
                    <div><hr/></div>
                    <Link to="/addAddress"><div className="btn btn-light m-1"> Add Address</div></Link>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
     address:state.Address.Addresses,
     
    }
    
    
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      getAddress: (payload) => dispatch(actions.getAddress(payload)),
      deleteAddress: (payload) => dispatch(actions.deleteAddress(payload)),
    //    onproductbycateg:()=>dispatch(actions.getproductbycateg()),
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ShowAddress);
