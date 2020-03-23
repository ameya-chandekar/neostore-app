import React, { Component } from 'react'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import cart from '../../../assets/empty-cart.png'
import {Link } from'react-router-dom'
export class Cart extends Component {
    render() {
      const steps = ['Cart', 'Delivery Address'];
        return (
            <div>
                <Navbar />
                <div className="row">
                            <Stepper alternativeLabel style={{ width: "100%" }}>
                                {steps.map(label => (
                                    <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                        </div>

                        <div className="container">

                        <div className="row ">
                                      <div className="col-lg-8 col-md-12">
                                      <div className="card" style={{width:"100%",fontSize:"11px"}}>
                                      <div className="card-header row">
                                                  <div className="col-6">
                                                    product
                                                    </div>
                                                    <div className="col-3">
                                                      Quantity
                                                    </div>
                                                    <div className="col-1"><span>price</span></div>
                                                    <div className="col-1"><span>Total</span></div>
                                      </div>
                                        <ul className="list-group list-group-flush ">
                                             <li className="list-group-item ">
                                               <div className="row">
                                                 <div className="col-6">
                                                   <div className="row">
                                                   <div className="col-2">img</div>
                                               <div className="col-4">
                                                 <div className="row">product name</div>
                                                 <div className="row">status</div>
                                               </div>
                                                   </div>
                                                   </div>

                                                   <div className="col-3">-btn+</div>
                                                   <div className=""></div>
                                                   <div className="2">400</div>
                                                   <div className="2">4000</div>
                                                   <div className="2">D</div>
                                               
                                               </div>
                                               
                                               </li>                                     
                                                  </ul>
                                      </div>
                                        
                                      </div>
                                      <div className="col-lg-4 col-md-12">

                                      <div Name="card" >
                                        <div className="card-header">
                                          <h4>Review Order</h4>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                          <li className="list-group-item">
                                            <div className="row">
                                              <div className="col-6">Subtotal</div>
                                              <div className="col-6"></div>
                                            </div>
                                          </li>
                                          <li className="list-group-item"><div className="row">
                                              <div className="col-6">
                                              GST(5%)
                                              </div>
                                              <div className="col-6"></div>
                                            </div>
                                            </li>
                                          <li className="list-group-item">
                                          <div className="row">
                                              <div className="col-6">
                                              Order Total

                                              </div>
                                              <div className="col-6"></div>
                                            </div>
                                          </li>
                                          <li  className="list-group-item">
                                                <div className="btn btn-primary" style={{width:"100%"}}>
                                                  proceed to buy
                                                </div>

                                            
                                          </li>
                                        </ul>
                                      </div>
                                      </div>
                                    </div>
                        </div>
                                    

                             
                             
                             
                             
                             
                             
                             
                             {/* do not touch this code */}
                             :<div className="row mt-5">
                                <div className="text-center mb-4" style={{ marginLeft: "27%" }}>
                                    <img src={cart} alt="img" height="30%" />
                                    <div className="text-center mt-4">
                                        <h3>YOUR CART IS CURRENTLY EMPTY</h3>
                                        <p>Before proceed to checkout you must add some products to you shopping cart.
                                        <br />You will find lots of intresting products on our products page</p>
                                        <Link to="/products" className="btn btn-primary">Return to product page</Link>
                                    </div>
                                </div>
                            </div>
                <Footer />
            </div>
        )
    }
}

export default Cart
  