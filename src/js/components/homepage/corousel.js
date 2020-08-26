import React, { Component } from 'react'
import './corousel.css'
import { Link } from 'react-router-dom'
import { ROOT_URL } from '../../api/globals';
// import Link from'react-router-dom'
//redux imports
import { connect } from 'react-redux';
import * as actions from '../../redux/actions'
export class Corousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      category_id:"",
    };
  }
  componentDidMount() {
    return fetch(ROOT_URL+"getAllCategories")
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

  handleImageClick = (categ_id) => {
   
  //   this.setState({
  //     category_id:catogorie_id
  // })
  const category_id=categ_id?categ_id:"";
    console.log(category_id, "onlick of image cate id")
    this.props.onGetAllProduct({category_id})
    
    // this.props.onproductbycateg({catogorie_id});
    // console.log(this.props.history)
  }

  render() {
    const url = ROOT_URL;
    const imageData = this.state.data;

    // let res = imageData.map(a => a.product_image);
    // let cat_id = imageData.map(a => a.category_id);
    // const path = res.map(el => {
    //   return url.concat(el);
    // });
    // console.log(path);
    return (
      <div className="homepage-corousel">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">


            {

              imageData.map((m, index) =>
                index === 0 ?
                  (
                    <div className="carousel-item active">
                      <img className="d-block w-100" src={url + m.product_image} alt="First slide" onClick={() => { this.handleImageClick(m.category_id) }} />
                    </div>
                  )
                  : (
                    <div className="carousel-item ">
                     <Link to="/Products"> <img className="d-block w-100" alt="images not available" src={url + m.product_image} onClick={() => { this.handleImageClick(m.category_id) }} /></Link>
                    </div>
                  )

              )
            }

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



const mapStateToProps = state => {
  return {

  };


}

const mapDispatchToProps = dispatch => {
  return {
    onGetAllProduct: (payload) => dispatch(actions.getAllProduct(payload)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Corousel);
