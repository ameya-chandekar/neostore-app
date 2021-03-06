import React, { Component } from 'react'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
// import CategoriesAccordian from './categories/categoriesAccordian'
import AllProducts from './allproducts/allproducts'
import "./productsModule.css"
// import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import "../categories.css"
import { API } from '../../api/api'
//redux imports
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
export class ProductsModule extends Component {

    constructor(props) {
        super(props)

        this.state = {
            maxPage: 2,
            pageNo: 1,
            perPage: 9,
            Categorie: [],
            Colors: [],
            category_id: "",
            color_id: "",
        }
    }


   sortbycategorie = (categ_id) => {
        this.setState({
            category_id: categ_id
        })

        let { color_id } = this.state;

        const category_id = categ_id ? categ_id : "";
        console.log(category_id, "lalalalalalalalalalalalalalalalaal")
        const payload = { category_id: category_id, color_id: color_id }
        this.props.onGetAllProduct(payload)

    }

    sortbycolor = (col_id) => {
        this.setState({
            color_id: col_id
        })
        // console.log(" color id to be passed",color_id    )
        let { category_id } = this.state;

        const color_id = col_id ? col_id : "";
        this.props.onGetAllProduct({ color_id, category_id })

    }

    nextPage = () => {
        var maxPageNo = this.props.total / this.state.perPage;
        var mod  = this.props.total % this.state.perPage
        var nextPage = this.state.pageNo + 1;
        if(mod > 0) maxPageNo++;
        if(nextPage <= maxPageNo ) { 
        this.setState({
            pageNo : nextPage,
            maxPage : maxPageNo
        }) 
        }
        else {
            
        }
    }
    prevPage = () => {
        var prevPage = this.state.pageNo - 1;
        if(prevPage > 0) {
            this.setState({
                pageNo : prevPage
            }) 
        }
    }

    componentDidMount() {
        const data = {};
        let cb = {
            success: (res) => {
                this.setState({
                    Categorie: res.category_details

                });

            },
            error: (err) => {

            }
        }
        let cb1 = {
            success: (res) => {
                this.setState({

                    Colors: res.color_details
                });

            },
            error: (err) => {

            }
        }
        API.getAllCategories(data, cb);
        API.getAllColors(data, cb1);


    }


handleAllProduct=()=>{

    // let { category_id,color_id } = this.state;
    this.props.onGetAllProduct({ color_id:"", category_id:"" })
}


    render() {
        let { Categorie, Colors } = this.state;
        const {pageNo}=this.state
        return (
            <div>
                <Navbar login={localStorage.getItem('login_user_data') ? 'true' : 'false'} />
                <div className="allproducts">
                    <div className="row">
                        <div className="col-lg-3 col-md-12">
                            {/* <CategoriesAccordian /> */}
                            <div>
                                <div>
                                    <ExpansionPanel>
                                        <ExpansionPanelDetails >
                                            <div className="btn " style={{ width: "100%", height: "100%" }} onClick={this.handleAllProduct}> 
                                            <b>All product</b></div>
                                        </ExpansionPanelDetails>
                                    </ExpansionPanel>

                                    <ExpansionPanel>
                                        <ExpansionPanelSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header">
                                            <Typography >Categories</Typography>
                                        </ExpansionPanelSummary>
                                        <ExpansionPanelDetails >
                                            <div className="row">
                                                {Categorie.map(el => {

                                                    return (
                                                        <div className=" col-12 btn Categories-btn" onClick={() => {this.sortbycategorie(el.category_id) }}><h6>{el.category_name}</h6>
                                                        </div>
                                                    )
                                                })}
                                            </div>

                                        </ExpansionPanelDetails>
                                    </ExpansionPanel>

                                    <ExpansionPanel>
                                        <ExpansionPanelSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel2a-content"
                                            id="panel2a-header"
                                        >
                                            <Typography >Color</Typography>
                                        </ExpansionPanelSummary>
                                        <ExpansionPanelDetails>
                                            <div className="row">
                                                {Colors.map(el => {
                                                    return (

                                                        <div className=" col-4 mb-2 Categories-btn "><button className="btn"
                                                            style={{ backgroundColor: el.color_code, width: "80%", height: "100%", border: "0.5px solid " }}
                                                            onClick={() => this.sortbycolor(el.color_id)}></button>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </ExpansionPanelDetails>
                                    </ExpansionPanel>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-12">
                            <AllProducts pageNo={this.state.pageNo} perPage={this.state.perPage} category_id={this.state.category_id} color_id={this.state.color_id} />
                            <div className="pagination" style={{ marginLeft: "35%" }}>
                                <ul className="pagination">
                                    {/* {this.initiatePagination()} */}
                                  <li className="page-item"><button class={" btn btn-danger m-1"} disabled={this.state.pageNo == 1} onClick={this.prevPage} >Previous</button></li>
                                              
                                 <li class="page-item"><button class=" btn btn-danger m-1" onClick={this.nextPage} disabled={ this.state.pageNo === this.state.maxPage }>Next</button></li>
                                </ul>
                            </div>
                            </div>

                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        total : state.productbycateg.productdetails.total_count
    };


}

const mapDispatchToProps = dispatch => {
    return {
        onGetAllProduct: (payload) => dispatch(actions.getAllProduct(payload)),
        //     onproductbycateg:(payload)=>dispatch(actions.getproductbycateg(payload)),
        //   onproductbycolor:(payload)=>dispatch(actions.getproductbycolor(payload)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsModule); 
