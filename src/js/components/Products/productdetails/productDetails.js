import React, { Component } from "react";
import SimpleTabs from "./simpleTabs"
import Navbar from "../../navbar/navbar";
import Footer from "../../footer/footer";
// import AppBar from '@material-ui/core/AppBar';
// import Tabs from "@material-ui/core/Tabs";
// import Tab from "@material-ui/core/Tab";
// import Typography from '@material-ui/core/Typography';
import Rating from "@material-ui/lab/Rating";
import Box from '@material-ui/core/Box';
// import ReactRating from 'react-rating';
import ReactStars from "react-rating-stars-component";
import sweetalert2 from 'sweetalert2';
// import StarBorderIcon from '@material-ui/icons/StarBorder';
import '../productdetails/productDetails.css'
import ReactImageMagnify from 'react-image-magnify';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions';

import { ROOT_URL } from '../../../api/globals'
import Swal from 'sweetalert2';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export class ProductDetails extends Component {

  constructor(props) {
    super(props)

    this.state = {
      data: [],
      product_id: "",
      imageurl: "",
      rating: '',
      showDetail: true,

    }
  }
  handleimage = (imgurl) => {
    const url = imgurl;
    // console.log(url, "879896re9r8w89er98w7r97r98wer986wr7w6rwe869r");
    this.setState({
      imageurl: url
    })

  }


  componentDidMount() {
    const { productid } = this.props
    // this.setState({
    //   product_id:productid,
    // }) 
    // const {product_id}=this.state
    this.props.onGetProductByid({ productid })

  }




  //rating related work
  handleRating = (value) => {
    console.log(value, "rated value");
    this.setState({
      rating: value,

    });
  };


  handleRatingSubmit = async (e) => {
    e.preventDefault();

    let data = {
      product_id: this.props.productid,
      product_rating: this.state.rating,
    };
    console.log(data, "rating submit function called")
    const data2 = localStorage.getItem('login_user_data');
    const userData = JSON.parse(data2);
    const user_token = userData.token
    this.props.updateRating({ data, user_token })
    sweetalert2.fire({
      'text': 'Rating has been updated successfully'
    })

  };




  handlecart = async (id, data) => {
    //   this.props.onaddtocart(id);
    try {
      let finalData = {
        _id: data._id,
        product_id: data,
        product_cost: data.product_cost,
        total_productCost: data.product_cost,
        quantity: 1
      };
      let cartData = localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : [];
      if (cartData === []) {
        let tempData = [];
        tempData.push(finalData);
        localStorage.setItem("cart", JSON.stringify(tempData));
        localStorage.getItem('cart'.length)


        Swal.fire({
          'title': 'Product added to cart successfully',
          "icon": 'success'
        });

      } else {
        let existed_item = cartData.find(item => id === item._id);
        if (existed_item) {
          Swal.fire({
            'title': 'Product already exists in cart',
            "icon": 'warning'
          });
        } else {
          cartData.push(finalData);
          localStorage.setItem("cart", JSON.stringify(cartData));
          localStorage.getItem('cart'.length)
          // this.setState({ cartCount: 1 });
          Swal.fire({
            'title': 'Product added to cart successfully',
            "icon": 'success'
          });

          // localStorage.getItem('cart'.length);
          // this.setState({ cartCount: this.state.cartCount + 1 })
        }
      }

    } catch (error) {
      Swal.fire({
        title: "Already added to cart",
        text: "Please check cart",
        icon: "warning",
        timer: 2000
      });
      console.log(error);
    }
  };
  render() {

    const data1 = localStorage.getItem('login_user_data');
    const userData = JSON.parse(data1);
    const user_token = userData?userData.token:null
    const { imageurl } = this.state

    // console.log("product ------------- id", this.props.productid);
    const product_details = this.props.allProduct[0] ? this.props.allProduct[0] : [];
    const product_desc = product_details.product_desc
    const product_material = product_details.product_material
    const product_dimension = product_details.product_dimension
    const product_producer = product_details.product_producer
    const subimages = product_details.subImages_id ? product_details.subImages_id.product_subImages : [];
    console.log("inside product detailsasmsnlaskndlkandlakdnalkndadalnaldna ", product_details)
    return (
      <div>
        <Navbar />
        <div className="product-detail container">
          <div className="row mt-5">
            <div className="col-lg-6 col-md-12">
              <div classname="row">
                <div className="details-img img-fluid" >

                  <div onMouseEnter={() => { this.setState({ showDetail: false }) }} onMouseLeave={() => { this.setState({ showDetail: true }) }} >
                    <ReactImageMagnify
                      {...{
                        smallImage: {
                          alt: "product",
                          src: imageurl ? imageurl : ROOT_URL + product_details.product_image,
                          width: 450,
                          height: 300
                        },
                        largeImage: {
                          src: imageurl ? imageurl : ROOT_URL + product_details.product_image,
                          width: 1200,
                          height: 1800,
                        },
                      }}
                    /></div></div>
              </div>
              <div className="row" style={{ margin: "20px" }}>

                {
                  // console.log(subimages,"for map") 
                  subimages.map((el) => {
                    // console.log(el)
                    return (
                      <div className="col-4" style={{ width: "50px", height: "80px", border: "1px solid" }}>
                        <img src={ROOT_URL + el} style={{ width: "100%", height: "100%", padding: "10px" }}
                          onClick={() => this.handleimage(ROOT_URL + el)} />
                      </div>
                    )

                  })
                }

              </div>
            </div>
            {this.state.showDetail === true ?
              <div className="col-lg-6 col-md-12">
                <div>
                  <h1>{product_details.product_name}</h1>
                  <span><Rating
                    name="read-only"
                    value={product_details.product_rating}
                    readOnly
                  /></span>
                  <hr />
                  <div className="mt-2 mb-2">price:₹ <span>{product_details.product_cost}</span></div>
                  <div>
                    {/* color:<span className="item-color" style={{backgroundColor:product_details.colo_id.color_code}}></span> */}
                  </div>
                  <div className="mt-2 mb-2">
                    <span>Share</span>  <span><i class="fa fa-share-alt"></i></span>
                  </div>
                  <div className=" sharebtn row mt-2 mb-2">
                    <div className="col"><button className="btn btn-primary" ><i class="fa fa-facebook-square"></i></button></div>
                    <div className="col"><button className="btn btn-danger"><i class="fa fa-google"></i></button></div>
                    <div className="col"><button className="btn btn-success"><i class="fa fa-whatsapp"></i></button></div>
                    <div className="col"><button className="btn btn-danger"><i class="fa fa-pinterest"></i></button></div>
                    <div className="col"><button className="bbtn btn-info  "><i class="fa fa-twitter"></i></button></div>
                  </div>
                  <div>
                    <button className="btn btn-info mr-2" onClick={() => { this.handlecart(product_details.product_id, product_details) }}>Add to cart</button>
                    <span></span>
                    {/* <button className="btn btn-danger ml-2"></button> */}
                    {user_token? <button
                      className="btn btn-danger ml-2"
                      /* disabled={localStorage.getItem("login_User_Data") ? false : true} */
                      data-toggle="modal"
                      data-target="#myModal">
                      Rate Product
                </button>:<button
                      className="btn btn-danger ml-2"
                      /* disabled={localStorage.getItem("login_User_Data") ? false : true} */
                      onClick={()=>alert("Please Login First")}
                       >
                      Rate Product
                </button>}
                  </div>
                </div>
              </div> : null}
          </div>
          <div className="modal fade" id="myModal">
            <div className="modal-dialog modal-sm modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Rating</h4>
                 
                  <button type="button" className="close" data-dismiss="modal" >
                    &times;</button>
                </div>

                <div className="modal-body">
                  <Box component="fieldset" mb={3}>
                    {/* <Rating name="pristine" onChange={this.handleRating} /> */}
                    {/* <ReactRating onChange={(value) => { this.handleRating(value) }} placeholderRating={this.state.rating ? this.state.rating : 0} /> */}
                    <ReactStars
                      count={5}
                      /* onChange={} */
                      onChange={(value) => { this.handleRating(value) }}
                      size={24}
                      half={true}
                      emptyIcon={<i className="far fa-star"></i>}
                      halfIcon={<i className="fa fa-star-half-alt"></i>}
                      fullIcon={<i className="fa fa-star"></i>}
                      color2={"#ffd700"}
                      value={this.state.rating ? this.state.rating : 0}
                    />
                    {/* <Rating
                    size="large" 
          name="half-rating"
          defaultValue={0}
          precision={0.5}
          emptyIcon={<StarBorderIcon fontSize="inherit" />}
          onChange={(value) => { this.handleRating(value) }} placeholderRating={this.state.rating ? this.state.rating : 0}
        /> */}
                  </Box>
                </div>

                <div className="modal-footer text-center">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.handleRatingSubmit}
                    disabled={false}
                    data-dismiss="modal"
                  >Done</button>
                </div>
              </div>
            </div>
          </div>

          <div className="row">

            <div >
              <SimpleTabs desc={product_desc} material={product_material} dimension={product_dimension} manufacturer={product_producer} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    productid: state.productid.product_id,
    allProduct: state.productbycateg.productdetails,

  };


}

const mapDispatchToProps = dispatch => {
  return {
    onGetProductByid: (payload) => dispatch(actions.getProductById(payload)),
    updateRating: (payload) => dispatch(actions.updateRating(payload)),
    //    onproductbycateg:()=>dispatch(actions.getproductbycateg()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
// export default ProductDetails;
