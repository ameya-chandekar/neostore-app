import React from 'react'
import { ROOT_URL } from '../../../../api/globals'
import './productCard.css'
function ProductCard(props) {
  const productDetails = props.card.DashboardProducts[0];


  return (

    <div className="product-card m-3">
      <div className="card " >
        <img className="card-img-top" src={ROOT_URL + productDetails.product_image} alt="Card image" />
        <div className="card-body">
          <h5 className="card-title">{productDetails.product_name}</h5>
        <p className="card-text"><i class="fa fa-rupee-sign"></i>{productDetails.product_cost}</p>
          <button href="#" className="btn btn-danger"><b>Add To Cart</b></button>
        </div>
      </div>
    </div>

  )
}

export default ProductCard
