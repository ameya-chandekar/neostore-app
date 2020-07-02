import React, { Component } from "react";
import Navbar from "../navbar/navbar";
import Corousel from "./corousel"
import Footer from "../footer/footer";
import "./homepage.css";
import PopularProducts from "../popularproducts/popularProducts";


export class HomePage extends Component {
  
// componentDidUpdate(prevProps, prevState) {
//   localStorage.getItem('login_user_data');
// }
constructor(props) {
  super(props);

  this.state = {
     
  }
}


  
  render() {
    const data1 = localStorage.getItem('login_user_data');
    const userData = JSON.parse(data1);
    const user_token = userData?userData.token:""
   
    return (
      <div>
            
        <Navbar  login={user_token? 'true' : 'false'}/>
        <Corousel/> 
        <PopularProducts/>
        <Footer/>
   
      </div>
    );
  }
}

export default HomePage;
