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

import * as firebase from "firebase";

import * as ROUTES from "./Constants/Routes/Routes";

class App extends React.Component {
constructor (props) {
  super(props);
  this.state = {
    header: "Home",
    error: null,
    loggedOut: false,
    authUser: null,
  }
}

componentDidMount() {
  firebase.auth().onAuthStateChanged(authUser => {
    authUser
      ? this.setState({ authUser })
      : this.setState({ authUser: null });
  });
}

componentDidUpdate() {
  if (this.state.loggedOut === true){
    this.loggedOutStatus();
  }
}

signOutHandler = () => {
  firebase.auth().signOut()
  .then((authUser) => {
    console.log("successful logout");
    this.setState({loggedOut: true})
  })
  .catch((error) => {
    console.log("error signing out" + error);
  });
}

headerChangeHandler = (header) => {
      const newHeader = header;
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

    let signInOut = this.state.authUser ? <p style={{color:"white"}}><Link to={ROUTES.LANDING} onClick={this.signOutHandler}>Sign out</Link></p> : <p style={{color:"white"}}><Link to={ROUTES.SIGN_IN}>Log in</Link></p> ;

    let redirecting = this.state.loggedOut ? <Redirect to={ROUTES.LANDING} /> : null;

    
    
    const borderStyle = {
         width: "295px",
    }

    return (
      <BrowserRouter>
        <div className="App-header">
          <div className="Top-Bar">
            <div className="LogoContainer2"> 
            <img style={borderStyle} src={Logo} alt="Logo2"/>              
            </div>      
            <div className="StateSelection">
              <p className="MainHeader">{this.state.header}</p>
            </div>
            <div style={{marginTop: "1px", marginRight: "8px", borderBottom: "1px solid grey"}}>
              {signInOut}
            </div>
          </div>
          <div className="App-header3">
            <div>
              <LeftMenu authUser={this.state.authUser} />
            </div>
            <Route path={ROUTES.LANDING} exact component={Landing} />
            <Route path={ROUTES.HOME}  component={Home} />
            <Route path={ROUTES.STRUCTURAL_REPORT} component={StructuralReport} />
            <Route path={ROUTES.CUSTOMER_INFO} component={CustomerInfo} />
            <Route path={ROUTES.CALCULATION_REPORT} component={CalculationReport} />
            <Route path={ROUTES.SIGN_UP} component={SignUp} />
            <Route path={ROUTES.SIGN_IN} component={signInInter} />
            {redirecting}
    
        </div> 
      </div>
    </BrowserRouter>   
    );
  }
}


export default App;
