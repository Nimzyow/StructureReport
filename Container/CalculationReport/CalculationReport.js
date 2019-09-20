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
                <div className="App-header4">
                    <div className="CompCont">
                        <p className="Text">Calculation Report Page</p>
                        <p className="Text">I want to design something to</p>
                        <p className="Text">make it easier and quicker</p>
                        <p className="Text">to do structural calcs</p>
                    </div>
                </div>
                <div className="App-header4">
                    <div className="CompCont">
                        <p className="Text"></p>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default CalculationReport;