// import React from 'react'

import { ROOT_URL } from '../../api/globals'
import { Link } from 'react-router-dom'
import './allproductCard.css'
import Rating from "@material-ui/lab/Rating";

import Swal from 'sweetalert2';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/index';
 class AllproductsCard extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      id: '',
      cartCount: 0
  }
  }

  // handlecart=(p_id)=>{
  //   const data1 = localStorage.getItem('login_user_data');
  //   const userData = JSON.parse(data1);
  //   const user_token=userData.token;
  //   if(user_token){
  //   this.props.onaddtocart({p_id,user_token})
  //   }
  //   else{
  //     alert("please login first")
  //   }
  // }
    // ----------------------------------

    componentDidMount=()=>{
      const count=localStorage.getItem('cart')
      if(count){
          this.setState({cartCount:count.length})
      }
  }

    handlecart = async (id, data) => {
    //   this.props.onaddtocart(id);
      try {
          let finalData = {
              _id: data._id,
              product_id: data,
              product_cost: data.product_cost,
              total_productCost: data.product_cost,
              quantity: 1
          };
          let cartData = localStorage.getItem("cart")
              ? JSON.parse(localStorage.getItem("cart"))
              : [];
          if (cartData === []) {
              let tempData = [];
              tempData.push(finalData);
              localStorage.setItem("cart", JSON.stringify(tempData));
              localStorage.getItem('cart'.length)


              Swal.fire({
                  'title': 'Product added to cart successfully',
                  "icon": 'success'
              });

          } else {
              let existed_item = cartData.find(item => id === item._id);
              if (existed_item) {
                  Swal.fire({
                      'title': 'Product already exists in cart',
                      "icon": 'warning'
                  });
              } else {
                  cartData.push(finalData);
                  localStorage.setItem("cart", JSON.stringify(cartData));
                  localStorage.getItem('cart'.length)
                  this.setState({ cartCount: 1 });
                  Swal.fire({
                      'title': 'Product added to cart successfully',
                      "icon": 'success'
                  });

                  localStorage.getItem('cart'.length);
                  this.setState({ cartCount: this.state.cartCount + 1 })
              }
          }

      } catch (error) {
          Swal.fire({
              title: "Already added to cart",
              text: "Please check cart",
              icon: "warning",
              timer: 2000
          });
          console.log(error);
      }
  };

  handledetails=(p_id)=>{
    this.props.onGetProductID({p_id})
    console.log(p_id,"onclick id to be passs");
    
  }

  render() {
    const productDetails =this.props.card;

    return (
      <div>
        <div className="product-card m-3">
      <div className="card p" >
        <img className="card-img-top p-2 m-2" src={ROOT_URL + productDetails.product_image} alt="Card image" />
        <div className="card-body">
          <h6 className="card-title text-center"><Link to="/ProductDetails"><a href="#" onClick={()=>this.handledetails(productDetails.product_id)}>{productDetails.product_name}</a></Link></h6>
       
        </div>
        <div className="text-center">
        <p className="card-text"><b>₹{productDetails.product_cost}</b></p>
          <button href="#" className="btn btn-danger" onClick={()=>{this.handlecart(productDetails.product_id,productDetails)}}><b>Add To Cart</b></button>
          <p>
              <Rating
                name="read-only"
                value={productDetails.product_rating}
                readOnly
              /></p>
        </div>
      </div>
    </div>
      </div>
    )
  }
}

// export default AllproductsCard


const mapDispatchToProps = dispatch => {
  return {
    onGetProductID: (payload) => dispatch(actions.getproductid(payload)),
    onaddtocart: (payload) => dispatch(actions.addToCart(payload)),

  }
}

export default connect(null, mapDispatchToProps)(AllproductsCard);

