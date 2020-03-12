import React, { Component } from 'react'

// import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { typography } from 'material-ui/styles';
import "./categories.css"
export class CategoriesAccordian extends Component {

    



    render() {
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
                            <div>
                            <div className="btn Categories-btn">Sofa</div>
                            <div className="btn Categories-btn">Bed</div>
                            <div className="btn Categories-btn">Chair</div>
                            <div className="btn Categories-btn">Table</div>
                            <div className="btn Categories-btn">Almirah</div>
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
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>






                </div>
            </div>
        )
    }
}

export default CategoriesAccordian





