import React, { Component } from "react";
import Navbar from "../navbar/navbar";
import Corousel from "./corousel"
import Footer from "../footer/footer";
import "./homepage.css";
import PopularProducts from "../popularproducts/popularProducts";
import Addnewaddress from "../usersection/address/addnewaddress";
import RecoverPassword from '../login/recoverPassword'

export class HomePage extends Component {
  

  
  render() {
   
    return (
      <div>
            
        <Navbar />
        <Corousel/> 
        <PopularProducts/>
        <Footer/>
        <Addnewaddress/>
        <RecoverPassword/>
   
      </div>
    );
  }
}

export default HomePage;
