import React from "react";

import "./CalculationReport.css";
import {BrowserRouter} from "react-router-dom";

class CalculationReport extends React.Component{
    constructor(props){
        super(props);
        this.state={
            clientFirstName: "",
            
        }
    }
    render() {
        return(
            <BrowserRouter>
            <div style={{display: "flex", marginLeft:"3%", marginRight:"3%", justifyContent: "flex-start", borderBottom:"1px solid #C3CFDD"}}>
                <h2 style={{color:"#1A3957", font: "large", fontfamily: "Arial, Helvetica, sans-serif" }}>Calculation report</h2>
            </div>
                    <div style={{display: "flex", width: "100%", flexDirection: "column", alignItems: "center", marginTop:"5%"}}>
                        <p className="Text">Calculation report under development</p>  
                    </div>
                
            </BrowserRouter>
        );
    }
}

export default CalculationReport;