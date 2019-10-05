import React from "react";

import "./Landing.css";
import {BrowserRouter} from "react-router-dom";

class Landing extends React.Component{
    constructor(props){
        super(props);
        this.state={
           
        }
    }
    render() {
        
        return(
            <BrowserRouter>
                <div className="App-header4">
                    <div className="CompCont1">
                        <p className="Text">Welcome to Civil Engineers Web App. Login to start using the applciation.</p> 
                        <p>don't have an account? Sign up using the link on the top right</p>
                    </div>
                </div>
            </BrowserRouter>
            
        );
    }
}

export default Landing;