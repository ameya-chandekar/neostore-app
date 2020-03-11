import React from 'react'
import { ROOT_URL } from '../../api/globals'
import './allproductCard.css'
import Rating from "@material-ui/lab/Rating";
function AllProductCard(props) {
  const productDetails = props.card;


  return (

    <div className="product-card m-3">
      <div className="card " >
        <img className="card-img-top" src={ROOT_URL + productDetails.product_image} alt="Card image" />
        <div className="card-body">
          <h6 className="card-title text-center"><a href="#">{productDetails.product_name}</a></h6>
       
        </div>
        <div className="text-center">
        <p className="card-text"><b>₹{productDetails.product_cost}</b></p>
          <button href="#" className="btn btn-danger"><b>Add To Cart</b></button>
          <p><Rating
                name="read-only"
                value={productDetails.product_rating}
                readOnly
              /></p>
        </div>
      </div>
    </div>

  )
}

export default AllProductCard
