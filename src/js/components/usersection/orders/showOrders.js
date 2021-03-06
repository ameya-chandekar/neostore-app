import React, { Component } from 'react';
import { connect } from 'react-redux';
// import * as actions from '../../../redux/actions';
import * as actions from '../../../redux/actions';
import {ROOT_URL} from'../../../api/globals'
class ShowOrders extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
             
        }
    }


    handleClick= (orderdata)=>{
        const data1 = localStorage.getItem('login_user_data');
        const userData = JSON.parse(data1);
        const user_token = userData.token
        this.props.getPDF({orderdata,user_token  })
        // const {OrderInvoice}=this.props
         window.open(ROOT_URL+this.props.OrderInvoice.receipt)

    }
    componentDidMount(){
        const data1 = localStorage.getItem('login_user_data');
        const userData = JSON.parse(data1);
        const user_token = userData.token
        this.props.getOrderDetail({user_token})
        // const {Orders}=this.props
        
    }
    
    render() {
        const {Orders}=this.props
        const order =Orders.product_details
  

        return (
            <div>
                {
                            order?order.map((i)=>{
                        
                                const productimg=i.product_details
                                return(
                                    <div className="orders m-2" style={{ border: "1px groove", borderRadius: " 5px" }}>
                                    <div className="m-2"> <span>TRANSIT Order By :</span><span>{i.product_details[0].order_id}</span></div>
                                    <div className="m-2"><span>Placed on</span><span>{i.product_details[0].createdAt}</span> <span> /₹{i.product_details[0].total_cartCost}</span></div>
                                    <div><hr /></div>
                                    <div style={{width:"10%",height:"10%"}} className="m-2 ">
                                      { productimg.map((img)=>{
                                           return(<img className="m-2" style={{width:"100%",height:"100%"}} src={ROOT_URL+i.product_details[0].product_details[0].product_image}/>)
                                       } )} </div>
                                    <div><hr /></div>
                                    <div className="btn btn-primary m-1" onClick={()=>this.handleClick(i)}>Download invoice as PDF</div>
                                </div>
                                )
                                
                    }):
                    <div className="text-center"><h1 >You dont have any orders placed</h1></div>
                }
               
            </div>
        );

    }
}

const mapStateToProps = state => {
    return {
     Orders:state.Orders.Orders,
     OrderInvoice:state.Orders.orderInvoice
     
    }
    
    
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        getOrderDetail: (payload) => dispatch(actions.getOrders(payload)),
      getPDF:(payload)=>dispatch(actions.getOrderPDF(payload)),
     
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ShowOrders);
