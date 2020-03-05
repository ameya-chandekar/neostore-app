import React, { Component } from 'react'
import ProductCard from './productCard/productCard'
import axios from 'axios'
import {API} from '../../../api/api';
export class PopularProducts extends Component {

  constructor(props) {
    super(props)

    this.state = {
      data: []

    }
  }
  componentDidMount() {
    // return axios.get("http://180.149.241.208:3022/defaultTopRatingProduct")
    // //   .then(res => res.json())
    //   .then(response => {
    //     this.setState({
    //       data: response.data.product_details
    //     });



    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });

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
      return <ProductCard card={ele} />
    })
    return productCard;
  }
  render() {

    //console.log("ooooo obhaiiii",product_details);

    return (
      <div className="popular-products">
        <div className="popular-product-wraapper mt-5 mb-5">
          <h5>Popular products</h5>
          <div>

            {this.productCard()}

          </div>
          <button>View All</button>
        </div>


      </div>
    )
  }
}

export default PopularProducts
