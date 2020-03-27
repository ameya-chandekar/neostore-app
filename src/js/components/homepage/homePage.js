import React, { Component } from "react";
import Navbar from "../navbar/navbar";
import Corousel from "./corousel"
import Footer from "../footer/footer";
import "./homepage.css";
import PopularProducts from "../popularproducts/popularProducts";


export class HomePage extends Component {
  

  
  render() {
   
    return (
      <div>
            
            <Navbar  login={localStorage.getItem('login_user_data') ? 'true' : 'false'}/>
        <Corousel/> 
        <PopularProducts/>
        <Footer/>
   
      </div>
    );
  }
}

export default HomePage;
