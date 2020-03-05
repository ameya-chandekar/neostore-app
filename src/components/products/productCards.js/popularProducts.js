import React, { Component } from 'react'
import ProductCard from './productCard/productCard'
export class PopularProducts extends Component {
    render() {
        return (
            <div className="popular-products">
                <div className="popular-product-wraapper mt-5 mb-5">
                <h5>Popular products</h5>
                <div>
                    <ProductCard/>
                </div>
                    <button>View All</button>
                </div>
               
                
            </div>
        )
    }
}

export default PopularProducts
