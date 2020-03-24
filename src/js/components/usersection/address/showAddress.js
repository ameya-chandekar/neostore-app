import React, { Component } from 'react'
import { connect } from 'react-redux';
// import * as actions from '../../../redux/actions';
import * as actions from '../../../redux/actions';

export class ShowAddress extends Component {

    handleDelete=(addressid)=>{
        console.log(addressid);
        
this.props.deleteAddress(addressid);
    }
    componentDidMount(){
        // this.props.getAddress()
    }
  componentDidUpdate() {
    this.props.getAddress()
}
    render() {
        const address=this.props.address        
        return (
            <div>
                <div className="addresses " style={{border:"1px groove",borderRadius:"5px"}}>
                    <div className="m-3"><h3>Addresses</h3></div>
                   
                    {
                  // console.log(subimages,"for map") 
                address.map((el)=>{
                  console.log(el)
                return(
                    <div className="address m-2" style={{border:"1px groove",borderRadius:"5px"}}>
                        <div className="row m-1">
                            <div className="col-11">
                            <span className="add">{el.address}
                        </span>
                            </div>
                            <div className="col-1">
                                <div className="btn btn-danger" onClick={()=>this.handleDelete(el.id)}>✘</div>
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
                })
                }
                    <div><hr/></div>
                    <div className="btn btn-light m-1"> Add Address</div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
     address:state.getAddress.Addresses,
     
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
// export default ShowAddress
