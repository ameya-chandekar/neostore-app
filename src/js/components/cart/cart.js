import React, { Component } from 'react'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import cart from '../../../assets/empty-cart.png'
import { Link } from 'react-router-dom'
import { ROOT_URL } from '../../api/globals'
//redux
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

const user_token = localStorage.getItem('user_token');

export class Cart extends Component {
constructor(props) {
  super(props);

  this.state = {
     
  }
}
handleDelete=(p_id)=>{
  const data1 = localStorage.getItem('login_user_data');
  const userData = JSON.parse(data1);
  const user_token = userData.token
this.props.onDeleteCartProduct({p_id,user_token})

}
  componentDidMount() {
if( localStorage.getItem('login_user_data')){
    const data1 = localStorage.getItem('login_user_data');
    const userData = JSON.parse(data1);
    const user_token = userData.token
    // const cust_id=userData.customer_details.customer_id;
    this.props.onGetCartProduct({ user_token })}
  }
  render() {
    const { cartProducts } = this.props
    console.log(cartProducts, "data in state");
    const products = cartProducts.product_details
    console.log(products);
    const steps = ['Cart', 'Delivery Address'];
   
   if(this.props.cartProducts.product_details){
    return (
      <div>
        <Navbar login={localStorage.getItem('login_user_data') ? 'true' : 'false'} />
        <div className="row">
          <Stepper  style={{ width: "100%" }}>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>

        <div className="container m-auto ">

        <div className="row ">
            <div className="col-lg-8 col-md-12">
              <div className="card" style={{ width: "100%", fontSize: "11px" }}>
                <div className="card-header row">
                  <div className="col-6">
                    product
                                                    </div>
                  <div className="col-3">
                    Quantity
                                                    </div>
                  <div className="col-1"><span>price</span></div>
                  <div className="col-1"><span>Total</span></div>
                </div>


                {
                  products ? products.map((el) => {
                    console.log(el, "ameyaaaaaaaaaaaaaaaaaaaaaaaa");
                    return (
                      <div className="row ">
                        <ul className="list-group list-group-flush ">
                          <li className="list-group-item ">
                            <div className="row">
                              <div className="col-6">
                                <div className="row">
                                  <div className="col-2"><img style={{ width: "100%", height: "100%" }} src={ROOT_URL + el.product_id.product_image} /></div>
                                  <div className="col-4">
                                    <div className="row"><div>{el.product_id.product_name}</div></div>
                                    <div className="row">status:<span>{el.product_id.product_stock ? " In Stock" : "out of stock"}</span></div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-3">
                                <span className="btn btn-danger px-1" style={{borderRadius:"50%",padding:"0px"}}>-</span>&nbsp;&nbsp;
                                <span className="p-1" style={{ border: "1px solid" }}>1</span>&nbsp;&nbsp;
                                <span className="btn btn-danger px-1" style={{borderRadius:"50%",padding:"0px"}}>+</span></div>
                              <div className=""></div>
                              <div className="col-1 ">{el.product_id.product_cost}</div>
                              <div className="col-1 ">{el.total_cost}</div>
                              <div className="col-1 btn"onClick={()=>{this.handleDelete(el.product_id.product_id)}}><i style={{color:"red"}} class="fa fa-trash" ></i></div>
                            </div>

                          </li>
                        </ul>
                      </div>

                    )
                  }) : []
                }
              </div>

            </div>
            <div className="col-lg-4 col-md-12">

              <div Name="card" >
                <div className="card-header">
                  <h4>Review Order</h4>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <div className="row">
                      <div className="col-6">Subtotal</div>
                      <div className="col-6"></div>
                    </div>
                  </li>
                  <li className="list-group-item"><div className="row">
                    <div className="col-6">
                      GST(5%)
                                              </div>
                    <div className="col-6"></div>
                  </div>
                  </li>
                  <li className="list-group-item">
                    <div className="row">
                      <div className="col-6">
                        Order Total

                                              </div>
                      <div className="col-6"></div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="btn btn-primary" style={{ width: "100%" }}>
                      proceed to buy
                                                </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        
        {<Footer />}
     
      </div>
    )
   }
  
   else{
   
    return(
      <div>
      <Navbar login={localStorage.getItem('login_user_data') ? 'true' : 'false'} />
      <div className="row mt-5">
      <div className="text-center mb-4" style={{ marginLeft: "27%" }}>
        <img src={cart} alt="img" height="30%" />
        <div className="text-center mt-4">
          <h3>YOUR CART IS CURRENTLY EMPTY</h3>
          <p>Before proceed to checkout you must add some products to you shopping cart.
                                    <br />You will find lots of intresting products on our products page</p>
          <Link to="/products" className="btn btn-primary">Return to product page</Link>
        </div>
      </div>
    </div> 
     <Footer />
     </div>
    )

  }

  }

  
}


const mapStateToProps = state => {
  return {
    cartProducts: state.cart.cartProductdetails,

  };


}

const mapDispatchToProps = dispatch => {
  return {
    onGetCartProduct: (payload) => dispatch(actions.getCartProduct(payload)),
    onDeleteCartProduct: (payload) => dispatch(actions.deleteCartProduct(payload)),
    //    onproductbycateg:()=>dispatch(actions.getproductbycateg()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
// export default Cart
