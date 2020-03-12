import React, { Component } from 'react'
import ProductCard from './productCard/productCard'
import { API } from '../../../api/api';
import {Link} from 'react-router-dom'
export class PopularProducts extends Component {

  constructor(props) {
    super(props)

    this.state = {
      data: []

    }
  }
  componentDidMount() {
    let cb = {
      success: (res) => {
        console.log(res)
        this.setState({
          data: res.product_details
        });
      },
      error: (err) => {
        console.log(err)
      }
    }

    API.getProduct({}, cb)

  }
  productCard = (ele) => {
    const product_details = this.state.data;
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

export default PopularProducts
