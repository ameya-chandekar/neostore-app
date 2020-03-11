import React, { Component } from 'react'
import AllProductCard from '../allproductsCard'
import { API } from '../../../api/api'
export class Allproducts extends Component {
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

        API.getAllProduct({}, cb)

    }
    productCard = (ele) => {
        const product_details = this.state.data;
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

export default Allproducts
