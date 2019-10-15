import React from "react";
import 'typeface-roboto';

import "./ClientProgram.css";
import {BrowserRouter} from "react-router-dom";
import ClientInfoMenu from "../ClientInfoMenu/ClientInfoMenu";

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
                    <h2 style={{color:"#1A3957", fontWeight:"400" }}>Client Program</h2>
                </div>
                <ClientInfoMenu />
                
            </BrowserRouter>
        );
    }
}

export default CalculationReport;