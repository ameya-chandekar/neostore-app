// import React from 'react'

import { ROOT_URL } from '../../api/globals'
import { Link } from 'react-router-dom'
import './allproductCard.css'
import Rating from "@material-ui/lab/Rating";


import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/index';
 class AllproductsCard extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       pro_id:"",
    }
  }

  handlecart=(p_id)=>{
    this.props.onaddtocart({p_id})

  }

  handledetails=(p_id)=>{
    this.props.onGetProductID({p_id})
    console.log(p_id,"onclick id to be passs");
    
  }

  render() {
    const productDetails =this.props.card;

    return (
      <div>
        <div className="product-card m-3">
      <div className="card " >
        <img className="card-img-top" src={ROOT_URL + productDetails.product_image} alt="Card image" />
        <div className="card-body">
          <h6 className="card-title text-center"><Link to="/ProductDetails"><a href="#" onClick={()=>this.handledetails(productDetails.product_id)}>{productDetails.product_name}</a></Link></h6>
       
        </div>
        <div className="text-center">
        <p className="card-text"><b>₹{productDetails.product_cost}</b></p>
          <button href="#" className="btn btn-danger" onClick={()=>{this.handlecart(productDetails.product_id)}}><b>Add To Cart</b></button>
          <p><Rating
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

