import React from 'react';
import './App.css';
import "../src/Components/Report/Report.css";

import LeftMenu from "./Components/LeftMenu/LeftMenu";

import { BrowserRouter, Route } from "react-router-dom";

import Home from "./Container/Home/Home";
import StructuralReport from "./Container/StructuralReport/StructuralReport";
import CustomerInfo from "./Container/CustomerInfo/CustomerInfo";
import CalculationReport from "./Container/CalculationReport/CalculationReport";

class App extends React.Component {
constructor (props) {
  super(props);
  this.state ={
    header: "Structural Report"
  }
}

headerChangeHandler = (header) => {
      const newHeader = header;
      this.setState({
        header: newHeader
      })
}

  render(){ 

    

    return (
      <BrowserRouter>
        <div className="App-header">
          <div className="Top-Bar">
            <div className="LogoContainer">
              <p className="Header">Company Logo</p>
            </div>
            <div className="StateSelection">
              <p className="Header">{this.state.header}</p>
            </div>
          </div>
          <div className="App-header3">
            <div className="SimpleBorder">
              <LeftMenu
              topHeader={() => {this.headerChangeHandler("Home")}}
              href="/"
              title="Home" 
              />
              <LeftMenu
              topHeader={() => {this.headerChangeHandler("Structural Report")}}
              href="/structural-report"
              title="Structural Report"
              />
              <LeftMenu
              topHeader={() => {this.headerChangeHandler("Customer Info")}}
              href="/customer-info"
              title="Customer Info" 
              />
              <LeftMenu
              topHeader={() => {this.headerChangeHandler("Calcualtion Report")}}
              href="/calculation-report"
              title="Calculation report" 
              />
            </div>
            {/*<Route path="/" exact render={() => <h1>Home</h1>} />
            <Route path="/"  render={() => <h1>Home2</h1>} />*/}
            <Route path="/" exact component={Home} />
            <Route path="/structural-report" component={StructuralReport} />
            <Route path="/customer-info" component={CustomerInfo} />
            <Route path="/calculation-report" component={CalculationReport} />
            {/*<StructuralReport />*/}   
        </div> 
      </div>
    </BrowserRouter>   
    );
  }
}

export default App;
