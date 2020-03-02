import React, { Component } from "react";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import '../homepage/homepage.css'
export class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    return fetch("http://180.149.241.208:3022/getAllCategories")
      .then(res => res.json())
      .then(response => {
        this.setState({
          data: response.category_details
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    const url="http://180.149.241.208:3022/"
    const imageData = this.state.data;
    let res = imageData.map(a => a.product_image);
    console.log(res);
    return (
      <div>

        <Navbar />
      
        <div className="homepage-corousel">
    
<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src={url + res[0]} alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={url + res[1]} alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={url + res[2]} alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

        </div>
        <Footer />
      </div>
    );
  }
}

export default HomePage;
