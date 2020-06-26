import React, { Component } from 'react'

// import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "./categories.css"
import { API } from '../../../api/api'
//redux imports
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions';
class CategoriesAccordian extends Component {

    constructor(props) {
        super(props)

        this.state = {
            Categorie: [],
            Colors:[],
            category_id:"",
            color_id:"",
        }
    }




//     sortbycategorie=(catogorie_id)=>{
//         // this.setState({
//         //     cat_id:catogorie_id
//         // })
//      console.log("categorie id to be passed",catogorie_id)
//     this.props.onproductbycateg({catogorie_id})
    
// }

// sortbycolor=(color_id)=>{

//     console.log(" color id to be passed",color_id)
//     this.props.onproductbycolor({color_id})
    
// }


    // const {cat_id}=this.state
    sortbycategorie=(categ_id)=>{
            this.setState({
                category_id:categ_id
            })
         
       let   {color_id}=this.state;

    const category_id=categ_id?categ_id:"";
       console.log(category_id,"lalalalalalalalalalalalalalalalaal")
const payload={category_id:category_id,color_id:color_id}
        this.props.onGetAllProduct(payload)
        
    }

    sortbycolor=(col_id)=>{
        this.setState({
            color_id:col_id
        })
        // console.log(" color id to be passed",color_id    )
        let   {category_id}=this.state;
        
        const color_id=col_id?col_id:"";
        this.props.onGetAllProduct({color_id,category_id})
        
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
                
                    Colors:res.color_details
                });

            },
            error: (err) => {

            }
        }
        API.getAllCategories(data, cb);
        API.getAllColors(data, cb1);


    }
    render() {
        let { Categorie,Colors } = this.state;
        // console.log("category",Categorie + "color",Colors);
        return (
            <div>
                <div>
                    <ExpansionPanel>                   
                        <ExpansionPanelDetails >
                            <div className="btn " style={{width:"100%" ,height:"100%"}}> <b>All product</b></div>
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
                                        <div className=" col-12 btn Categories-btn" onClick={()=>this.sortbycategorie(el.category_id)}><h6>{el.category_name }</h6>
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
                                         style={{backgroundColor:el.color_code,width:"80%",height:"100%",border:"0.5px solid "}}
                                          onClick={()=>this.sortbycolor(el.color_id)}></button>
                                        </div>
                                    )
                                })}
                            </div>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
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
        onGetAllProduct:(payload)=>dispatch(actions.getAllProduct(payload)),
    //     onproductbycateg:(payload)=>dispatch(actions.getproductbycateg(payload)),
    //   onproductbycolor:(payload)=>dispatch(actions.getproductbycolor(payload)),
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(CategoriesAccordian);
  







