import React, { Component } from "react";
import Navbar from "../navbar/navbar";
import Corousel from "./corousel"
import Footer from "../footer/footer";
import "./homepage.css";
import PopularProducts from "../popularproducts/productCards.js/popularProducts";
import LoginPage from "../login/loginPage";
export class HomePage extends Component {
  

  
  render() {
   
    return (
      <div>
            
        <Navbar />

        <Corousel/>
        
      <PopularProducts/>
        <Footer/>
   
      </div>
    );
  }
}

export default HomePage;
