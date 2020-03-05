import React, { Component } from "react";
import Navbar from "../navbar/navbar";
import Corousel from "../homepage/corousel"
import Footer from "../footer/footer";
import "../homepage/homepage.css";
import PopularProducts from "../products/productCards.js/popularProducts";
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
