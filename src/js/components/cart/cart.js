import React, { Component } from 'react'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
export class Cart extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="empty-cart">
                    <div className="stepper">
                        <div className="row">
                            <div className="col-md-12">

                                {/* <!-- Stepers Wrapper --> */}
                                <ul className="stepper stepper-horizontal">


                                    <li className="completed">
                                        <a href="#!">
                                            <span className="circle">1</span>
                                            <span className="label">First step</span>
                                        </a>
                                    </li>

                                    {/* <!-- Second Step --> */}
                                    <li className="active">
                                        <a href="#!">
                                            <span className="circle">2</span>
                                            <span className="label">Second step</span>
                                        </a>
                                    </li>

                                </ul>
                                {/* <!-- /.Stepers Wrapper --> */}

                            </div>
                        </div>
                        {/* <!-- /.Horizontal Steppers --> */}
                    </div>

                </div>

                <Footer />
            </div>
        )
    }
}

export default Cart
  