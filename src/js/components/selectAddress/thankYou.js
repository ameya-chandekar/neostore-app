import React, { Component } from 'react'
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer'
import {Link} from 'react-router-dom';


export class ThankYou extends Component {
    render() {
        return (
            <div>
                <Navbar login={localStorage.getItem('loginUserData') ? 'true' : 'false'} />

                <div className=" text-center container m-5 ">
                        <h1 className="mt-5 mb-5 " style={{fontSize:"76px",fontFamily: "inherit"}}>Thank you for your order</h1>
                        <h6 className="mt-5 mb-5">Your order has been placed and is being processed</h6>
                    <Link to="/" className="btn btn-light mt-5 mb-5">Return to Homepage</Link>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default ThankYou
