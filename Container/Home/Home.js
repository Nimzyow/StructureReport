import React from "react";


import "./Home.css";
import {BrowserRouter} from "react-router-dom";

class Home extends React.Component{
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
                        <p className="Text">Welcome to Civil Engineers Web App</p>
                        <p className="Text">This is a web application that</p>
                        <p className="Text">is designed to make things easier</p>
                        <p className="Text">for us lazy Engineers :)</p>
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

export default Home;