import React, { Component } from 'react'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import StarIcon from '@material-ui/icons/Star';
import AllProductCard from '../allproductsCard'
import { API } from '../../../api/api'
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions';
export class Allproducts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            catid:''

        }
    }
    componentDidMount() {
       let category_id="";
       let color_id="";
        this.props.onGetAllProduct({category_id:"",color_id:""})
        // getCommonProducts({"category_id":""})
    }
    // componentDidUpdate(){

    //     this.props. onproductbycateg()
    // }
    productCard = (ele) => {
        const product_details = this.props.allProduct?this.props.allProduct:[];
        console.log("all the productsssssss",product_details)
        const productCard = product_details.map(ele => {
            return (
                <div className="col-lg-4 col-sm-12">
                    <AllProductCard card={ele} />
                </div>

            )
        })
        return productCard;
    }


    // For sorting products by rating
    sortByStarRating = async (data) => {
        this.props.onGetAllProduct(data);
    }

    // For sorting products by Price High to low  
    sortByHighToLow = async (data) => {
        this.props.onGetAllProduct(data);
    }

    //For sorting products by Price Low To High  
    sortbyLowToHigh = async (data) => {
        this.props.onGetAllProduct(data);
       
    }
  
    render() {
        return (
            <div className="popular-products text-center">
                
                <div className="row">
                    <div className="col-12">
                    <div>
                        <span>Sort By:</span>
                    <button className="btn btn-light text-primary m-2"><StarIcon onClick={()=>this.sortByStarRating({category_id:this.props.category_id,color_id:this.props.color_id,sortBy:"product_rating",sortIn:true})} /></button>
                    <button className="btn btn-light text-primary m-2"><b>₹</b><ArrowUpwardIcon onClick={()=>this.sortByHighToLow({category_id:this.props.category_id,color_id:this.props.color_id,sortBy:"product_cost",sortIn:false})} /></button>
                    <button className="btn btn-light text-primary m-2"><b>₹</b><ArrowDownwardIcon onClick={()=>this.sortbyLowToHigh({category_id:this.props.category_id,color_id:this.props.color_id,sortBy:"product_cost",sortIn:true})} /></button>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="popular-product-wraapper mt-5 mb-5">

                            <h5>All products</h5>



                        </div> </div>


                </div>

                <div className="row">
                 {this.productCard()}
                    
                </div>
            </div>


        )
    }
}

const mapStateToProps = state => {
    return {
      allProduct:state.productbycateg.productdetails,
        // productbycateg:state.productbycateg.productdetails.productbycateg.product_details
    };
    
    
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      onGetAllProduct: (payload) => dispatch(actions.getAllProduct(payload)),
    //    onproductbycateg:()=>dispatch(actions.getproductbycateg()),
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Allproducts);
  
