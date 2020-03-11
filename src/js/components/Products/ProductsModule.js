import React, { Component } from 'react'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import CategoriesAccordian from './categories/categoriesAccordian'
import AllProducts from './allproducts/allproducts'
export class ProductsModule extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className="allproducts">
                    <div className="row">
                        <div className="col-lg-3 col-md-12"><CategoriesAccordian/></div>
                        <div className="col-lg-9 col-md-12"><AllProducts/></div>
                    </div>
                    
                </div>
                <Footer/>
            </div>
        )
    }
}

export default ProductsModule
