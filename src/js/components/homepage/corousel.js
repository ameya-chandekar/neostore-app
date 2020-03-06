import React, { Component } from 'react'
import './corousel.css'
export class Corousel extends Component {
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
        const url = "http://180.149.241.208:3022/";
        const imageData = this.state.data;
        let res = imageData.map(a => a.product_image);
        const path = res.map(el => {
          return url.concat(el);
        });
        console.log(path);
        return (
            <div className="homepage-corousel">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                {path.map((m, index) =>
                  index === 0 ? (
                    <div className="carousel-item active">
                      <img  className="d-block w-100" src={m} alt="First slide" />
                    </div>
                  ) : (
                    <div className="carousel-item ">
                      <img className="d-block w-100" src={m} alt="First slide" />
                    </div>
                  )
                )}
  
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        )
    }
}

export default Corousel
