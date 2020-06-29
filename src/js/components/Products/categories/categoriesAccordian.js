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

 
    render() {
    
        // console.log("category",Categorie + "color",Colors);
        return (
            
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
  







