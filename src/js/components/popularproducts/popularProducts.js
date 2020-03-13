import React, { Component } from 'react'
import ProductCard from './productCard/productCard'
import { API } from '../../../api/api';
import {Link} from 'react-router-dom'

import { connect } from 'react-redux';
import * as actions from '../../../redux/actions';

export class PopularProducts extends Component {

  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     data: []

  //   }
  // }
  componentDidMount() {
    this.props.onGetPoularProduct()

  }
  productCard = () => {
    
    const product_details = this.props.product ; //? this.props.product : []
    console.log(product_details)
    const productCard = product_details.map(ele => {
      return (
        <div className="col-lg-3 col-sm-12">
          <ProductCard card={ele} />
        </div>

      )
    })
    return productCard;
  }
  render() {
    //console.log('Product ::', this.props)
    return (
      <div className="popular-products text-center">
        <div className="row">
          <div className="col-12">
            <div className="popular-product-wraapper mt-5 mb-5">
              <h5>Popular products</h5>

              <Link to="/Products"> <button className="btn"><b>View All</b></button></Link>

            </div> </div>


        </div>

        <div className="row">
          {this.productCard()}
        </div>
      </div>


    )
  }
}


const mapStateToProps = state => {
  return {
    product: state.product.popularProduct.product_details,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onGetPoularProduct: () => dispatch(actions.getPopularProduct()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PopularProducts);

