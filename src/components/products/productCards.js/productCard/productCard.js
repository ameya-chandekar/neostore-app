import React from 'react'

function ProductCard(props) {
    const productDetails = props.card.DashboardProducts[0];
    return (
        <div className="product-card">
        <div className="card" style={{width:"400px"}}>
    <img className="card-img-top"  alt="Card image" style={{width:"100%"}}/>
    <div className="card-body">
    <h4 className="card-title">{productDetails.product_name}</h4>
      <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
      <button href="#" className="btn btn-danger"><b>Add To Cart</b></button>
    </div>
  </div>
        </div>

    )
}

export default ProductCard
