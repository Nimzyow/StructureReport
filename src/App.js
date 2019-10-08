import React from 'react';
import './App.css';
import "../src/Components/Report/Report.css";

import Logo from "./Assets/ce_logo_header.png"

import LeftMenu from "./Components/LeftMenu/LeftMenu";

import { BrowserRouter, Route, Link, Redirect  } from "react-router-dom";

import Home from "./Container/Home/Home";
import Landing from "./Container/Landing/Landing";
import StructuralReport from "./Container/StructuralReport/StructuralReport";
import CustomerInfo from "./Container/CustomerInfo/CustomerInfo";
import CalculationReport from "./Container/CalculationReport/CalculationReport";
import SignUp from "./Container/UserAuth/SignUp/SignUp";
import SignIn from "./Container/UserAuth/SignIn/SignIn";
import SignInAlready from "./Container/UserAuth/SignIn/SignInAlready";
import PatchNotes from "./Container/PatchNotes/PatchNotes";

import {auth}from "firebase";

import * as ROUTES from "./Constants/Routes/Routes";

class App extends React.Component {
constructor (props) {
  super(props);
  this.state = {
    header: "Home",
    error: null,
    loggedOut: null,
    authUser: null,

    homeActive: true,
    structuralReportActive: false,
    clientDataActive: false,
    calculationReportActive: false,
    patchNoteActive: false
  }
}

componentDidMount() {
  auth().onAuthStateChanged(authUser => {
    authUser
      ? this.setState({ authUser, loggedOut: false }, ()=>{console.log("loggedoutstatus= " + this.state.loggedOut)})
      : this.setState({ authUser: null, loggedOut: true }, ()=>{console.log("loggedoutstatus= " + this.state.loggedOut)});
  });
}



signOutHandler = () => {
  auth().signOut()
  .then((authUser) => {
    console.log("successful logout");
    this.setState({loggedOut: true})
  })
  .catch((error) => {
    console.log("error signing out" + error);
  });
}

headerChangeHandler = (header) => {
  console.log("headerchangehandler called")
      const newHeader = header;
      console.log("new header is: "+newHeader)
      this.setState({
        header: newHeader
      })
}

loggedOutStatus = () => {
  console.log("loggedOutStatus method has been called")
  let state = this.state.loggedOut ? false : true;
  this.setState({
    loggedOut: state
  }, () => {console.log("loggedOutState = " + this.state.loggedOut)})
}

  render(){ 
    let signInInter = this.state.authUser ? SignInAlready : SignIn;

    let signOutOrIn = this.state.loggedOut ? 
    <p style={{color: "black"}}><Link to={ROUTES.SIGN_IN}>Sign in</Link></p> : 
    <p style={{color: "black"}} ><Link onClick={this.signOutHandler}>Sign out</Link></p>

    let redirecting = this.state.loggedOut ? <Redirect to={ROUTES.LANDING} /> : null;
    

    return (
      <BrowserRouter>
        <div className="App-header">
          <div className="App-header3">
            <div className={"LeftMenuBackground"}>
              <LeftMenu authUser={this.state.authUser} signOut={this.signOutHandler} />
            </div>
            <div className="Top-Bar">
            <div className="SignOutCont">
              {signOutOrIn}
            </div>
              <Route path={ROUTES.LANDING} exact component={Landing} />
              <Route path={ROUTES.HOME}  component={Home} />
              <Route path={ROUTES.STRUCTURAL_REPORT} component={StructuralReport} />
              <Route path={ROUTES.CUSTOMER_INFO} component={CustomerInfo} />
              <Route path={ROUTES.CALCULATION_REPORT} component={CalculationReport} />
              <Route path={ROUTES.SIGN_UP} component={SignUp} />
              <Route path={ROUTES.SIGN_IN} component={signInInter} />
              <Route path={ROUTES.PATCH_NOTES} component={PatchNotes} />
              {redirecting}
            </div>
        </div> 
        </div>
    </BrowserRouter>   
    );
  }
}

export default App;
