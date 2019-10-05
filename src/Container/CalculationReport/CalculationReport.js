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
                    <div style={{display: "flex", width: "100%", flexDirection: "column", alignItems: "center", marginTop:"5%"}}>
                        <p className="Text">Calculation report under development</p>  
                    </div>
                
            </BrowserRouter>
        );
    }
}

export default CalculationReport;