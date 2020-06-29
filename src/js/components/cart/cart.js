import React, { Component } from 'react'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import cart from '../../../assets/empty-cart.png'
import { Link } from 'react-router-dom'
import { ROOT_URL } from '../../api/globals'
import '../cart/cart.css'
import sweetalert2 from 'sweetalert2';
import Swal from 'sweetalert2';
//redux
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

const user_token = localStorage.getItem('user_token');

export class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
        cartData: [],
        total_cost:"",
        gst:"",
        orderTotal:""
        
        
    }
}
  
async componentDidMount(){

  try{
    this.getCartData();
  }catch(error){
      alert('Error in getting data')
  }
}

// Getting cart products from local Storage

getCartData=()=>{
  let result;
  try{  
    result= this.props.cartProducts.product_details?
    this.props.cartProducts.product_details
    ( console.log(this.props.cartProducts.product_details,"hun ja re bava adddddddddd"),
      this.setState({
      cartData:result
    })
  )

    :
    (  result=localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart'))
      : [],
      this.setState({
          cartData:result
      })
    )
      

      let a =result.map((item=>{
          return item.total_productCost*item.quantity;
      }))

      let totalCost=a.reduce((val,nextVal)=>parseInt(totalCost)+parseInt(gstCost));
      let gstCost = parseInt(totalCost+0.05);
      let orderTotal=parseInt(totalCost)+parseInt()
      this.setState({
          total_cost:totalCost,
          gst:gstCost,
          orderTotal:orderTotal
      });
  }catch(error){
      // handle error here
  }
}


// Handler for delete Item from cart


handleDelete=async (id)=>{
  try{
      Swal.fire({
          title:'Are you sure to delete this item ?',
          text:'Item will be deleted from your cart',
          icon:'warning',
          confirmButtonText:'Delete'
      }).then(async(result)=>{

          let data=localStorage.getItem('cart')
          ? JSON.parse(localStorage.getItem('cart'))
          :null;

          let cart=data.filter((item)=>{
              return item._id!== id;

          });
          
          localStorage.setItem('cart',JSON.stringify(cart));
          this.props.onDeleteCartProduct(id);
          this.getCartData();
          Swal.fire({
              text:'Item removed'
          })
      })
  } catch(error){
      console.log(error)
  }
}

// For Handling updating quantities in local Storage
//   -------------------

addOne = (id) => {
  const localCartData = JSON.parse(localStorage.getItem("cart"))
  const index = localCartData.findIndex(res=>{ return res._id === id  })
  if(localCartData[index].quantity>0 && localCartData[index].quantity<=9){
  localCartData[index].quantity=localCartData[index].quantity+1;
  localStorage.setItem('cart', JSON.stringify(localCartData));
  this.setState({ cartData: JSON.parse(localStorage.getItem("cart")) })
  
  }
}

subtractOne = (id) => {
  const localCartData = JSON.parse(localStorage.getItem("cart"))
  const index = localCartData.findIndex(res=>{ return res._id === id  })
  if(localCartData[index].quantity <= 1){
      window.confirm("Are you sure,to remove this item from cart")
      this.deleteItem(id);
      this.props.removeFromCart(id);
  }
  else if(localCartData[index].quantity > 1 && localCartData[index].quantity<=10){
      localCartData[index].quantity=localCartData[index].quantity-1;
      localStorage.setItem('cart', JSON.stringify(localCartData));
      this.setState({ cartData: JSON.parse(localStorage.getItem("cart")) })
      
  }
  
}

//   -----------------
// handleDelete=(p_id)=>{
//   const data1 = localStorage.getItem('login_user_data');
//   const userData = JSON.parse(data1);
//   const user_token = userData.token
// this.props.onDeleteCartProduct({p_id,user_token})

// }
  // componentDidMount() {

    // const data1 = localStorage.getItem('login_user_data');
    // const userData = JSON.parse(data1);
    // const user_token = userData.token
    // // const cust_id=userData.customer_details.customer_id;
    // this.props.onGetCartProduct({ user_token })}
  
  // }
  getOldCartData=()=>{

    let finalData = this.props.cartProducts.product_details ? this.props.cartProducts.product_details.map((item) => {
      item._id = item.product_id._id;
      return item
  }) : [];


  localStorage.setItem("cart", JSON.stringify(finalData));
  localStorage.setItem("cart_count", finalData.length);
    // let cartData=[]
    // cartData=this.props.cartProducts?this.props.cartProducts.product_details:[[]]
     
    //  localStorage.setItem('cart', JSON.stringify(cartData));
  }

  render() {
    const steps = ['Cart', 'Delivery Address'];    
    const data1 = localStorage.getItem('login_User_Data');
    // this.getOldCartData();

console.log(this.props.cartProducts.product_details,"products in cart after login resume")
    // ------------------------------------
    let orderTotal = 0
    this.state.cartData ? orderTotal = this.state.cartData
    .map(val => {return (val.product_cost * val.quantity)})
    .reduce((sum, product_cost) => {return Number(sum) + Number(product_cost)}, 0) : orderTotal = 0;
    
    const gst = Math.round(orderTotal / 100 * 5);
    const total = Number(gst) + Number(orderTotal) 



  //   const { cartProducts } = this.props
  //   console.log(cartProducts, "data in state");
  //   const products = cartProducts.product_details
  //   console.log(products);
  //   const steps = ['Cart', 'Delivery Address'];
  //  const yes=false
   if(this.state.cartData.length>0){
    return (
      <div>
        <Navbar login={localStorage.getItem('login_user_data') ? 'true' : 'false'} />
        <div className="row">
          <Stepper  style={{ width: "100%" }}>
          
              <Step key="Cart">
                <StepLabel><Link to="/Cart">Cart</Link></StepLabel>
              </Step>
           
              <Step key="Address">
              {/* <StepLabel><Link to="/deliveryAddress"> Delivery Address</Link></StepLabel> */}
              </Step>
         
          </Stepper>
        </div>

        <div className="container row cart">
        <div className="row ">
            <div className="col-lg-8 col-md-12">
              <div className="container" style={{fontSize: "11px" }}>
                <div className=" row">
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
              
              
              this.state.cartData.length>0 ? this.state.cartData.map((el) => {
                    console.log(el, "ameyaaaaaaaaaaaaaaaaaaaaaaaa");
                    return (
                      <div className="row ">
                        <ul className="list-group list-group-flush ">
                          <li className="list-group-item ">
                            <div className="row">
                              <div className="col-6">
                                <div className="row ">
                                  <div className="col-2" ><img style={{ width: "100%", height: "100%" }} src={ROOT_URL + el.product_id.product_image} /></div>
                                  <div className="col-4">
                                    <div className="row"><div>{el.product_id.product_name}</div></div>
                                    <div className="row">status: &nbsp;<span>{el.product_id.product_stock ? " In Stock" : "out of stock"}</span></div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-3">
                                <span className="btn btn-danger px-1 mt-1" style={{borderRadius:"50%",padding:"2px"}}onClick={()=>this.subtractOne(el._id)} >-</span>&nbsp;&nbsp;
                                <span className="p-1" style={{ border: "1px solid" }}>{el.quantity}</span>&nbsp;&nbsp;
                                <span className="btn btn-danger px-1 mt-1" style={{borderRadius:"50%",padding:"2px"}} onClick={()=>this.addOne(el._id)} >+</span></div>
                              <div className=""></div>
                              <div className="col-1 ">{el.product_id.product_cost}</div>
                              <div className="col-1 ">{el.product_cost*el.quantity}</div>
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

              <div Name="" >
                <div className="">
                  <h4>Review Order</h4>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <div className="row">
                      <div className="col-6">Subtotal</div>
                      <div className="col-6">{orderTotal}</div>
                    </div>
                  </li>
                  <li className="list-group-item"><div className="row">
                    <div className="col-6">
                      GST(5%)
                                              </div>
                    <div className="col-6">{gst}</div>
                  </div>
                  </li>
                  <li className="list-group-item">
                    <div className="row">
                      <div className="col-6">
                        Order Total

                                              </div>
                      <div className="col-6">{total}</div>
                    </div>
                  </li>
                  <li className="list-group-item">
                  <Link to="/selectAddress"><div className="btn btn-primary" style={{ width: "100%" }}>
                      proceed to buy
                                                </div></Link>
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
