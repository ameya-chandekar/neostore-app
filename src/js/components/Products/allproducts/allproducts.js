import React, { Component } from 'react'
import AllProductCard from '../allproductsCard'
import { API } from '../../../api/api'
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions';
export class Allproducts extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: []

        }
    }
    componentDidMount() {
       
        this.props.onGetAllProduct()

    }
    productCard = (ele) => {
        const product_details = this.props.allProduct?this.props.allProduct:[];
        const productCard = product_details.map(ele => {
            return (


                <div className="col-lg-4 col-sm-12">
                    <AllProductCard card={ele} />
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
                            <h5>All products</h5>



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
      allProduct: state.allProduct.allProduct.product_details,
      
    };
    
    
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      onGetAllProduct: () => dispatch(actions.getAllProduct()),
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Allproducts);
  
