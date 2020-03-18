import React, { Component } from "react";
import Navbar from "../../navbar/navbar";
import Footer from "../../footer/footer";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Rating from "@material-ui/lab/Rating";
import '../productdetails/productDetails.css' 
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions';
export class ProductDetails extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
      data:[]
       
    }
  }



  componentDidMount() {
       
    this.props.onGetAllProduct()
 

}
  render() {
const {productid}=this.props
     console.log("product ------------- id",this.props.productid );
    const product_details = this.props.allProduct?this.props.allProduct:[];
    const product = product_details.filter((productid)=>{
      return product_details.product_id==this.props.productid
      console.log("inside filter",productid);
      
    })
console.log("final product daata",product);
    
    return (
      <div>
        <Navbar />
        <div className="product-detail container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div>
                <div className="details-img">{/* <img src={ }/> */}</div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div>
                <h1>WInchester fabric sofa</h1>
                <span><Rating
                name="read-only"
                // value={productDetails.product_rating}
                readOnly
              /></span>
                <hr />
                <div>price:₹</div>
                <div>
                  color:<span className="item-color"></span>
                </div>
                <div>
                  share<span></span>
                </div>
                <div className="sharebtn">
                  <button className="btn btn-primary" >Fb</button>
                  <button className="btn btn-danger">G</button>
                  <button className="btn btn-success">WA</button>
                  <button className="btn btn-danger">P</button>
                  <button className="bbtn btn-info">TW</button>
                </div>
                <div>
                  <button className="btn btn-info ">Add to cart</button>
                  <button className="btn btn-danger">Rate Product</button>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <Paper square>
              <Tabs
                // value={value}
                indicatorColor="primary"
                textColor="primary"
                // onChange={handleChange}
                aria-label="disabled tabs example"
              >
                <Tab label="Active" />

                <Tab label="Active" />
              </Tabs>
            </Paper>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
   productid:state.productid.product_id,
   allProduct:state.productbycateg.productdetails,
 
  };
  
  
}

const mapDispatchToProps = dispatch => {
  return {
    onGetAllProduct: () => dispatch(actions.getAllProduct()),
  //    onproductbycateg:()=>dispatch(actions.getproductbycateg()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
// export default ProductDetails;
