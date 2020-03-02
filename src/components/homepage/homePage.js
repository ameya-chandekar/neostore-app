import React, { Component } from "react";
import Navbar from "../navbar/navbar";
import Corousel from "../homepage/corousel"
import Footer from "../footer/footer";
import "../homepage/homepage.css";
export class HomePage extends Component {
  

  
  render() {
   
    return (
      <div>
        <Navbar />

        <Corousel/>
        
    
        <Footer/>
      </div>
    );
  }
}

export default HomePage;
