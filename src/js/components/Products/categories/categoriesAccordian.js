import React, { Component } from 'react'

// import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { typography } from 'material-ui/styles';
import "./categories.css"
import { API } from '../../../api/api'
class CategoriesAccordian extends Component {

    constructor(props) {
        super(props)

        this.state = {
            Categorie: [],
            Colors:[],
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
        console.log("category",Categorie + "color",Colors);

        return (
            <div>
                <div>
                    <ExpansionPanel>
                        <ExpansionPanelSummary

                            aria-controls="panel2a-content"
                            id="panel2a-header">

                            <Typography >All Products </Typography>
                        </ExpansionPanelSummary>
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

                                        <div className=" col-12 btn Categories-btn"><h6>{el.category_name}</h6>
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

                                        <div className=" col-4 mb-2 Categories-btn "><button className="btn"  style={{backgroundColor:el.color_code,width:"80%",height:"100%",border:"0.5px solid "}}></button>
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
export default CategoriesAccordian





