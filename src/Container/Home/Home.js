import React from "react";
import {auth} from "firebase";
import "./Home.css";
import {BrowserRouter} from "react-router-dom";
import Spinner from "../../Components/Spinner/Spinner";


class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            authUser: false,
        }
    }

    componentDidMount() {
        this.listener = auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({authUser: true}, () =>{console.log("user signed in HOMEPAGE")})
            } else {
              console.log("user not signed in HOMEPAGE")
            }
          });
    }

    componentWillUnmount(){
        this.listener();
    }
    render() {
        
        return(
            <BrowserRouter>
                {this.state.authUser && 
                <div className="App-header4">
                    <div className="CompCont1">
                        <p className="Text">You have successfully logged in</p> 
                        <p>Structural report page and Calculation page is under construction but client list is available for use.</p>
                    </div>
                </div>}
                {!this.state.authUser && <div style={{display: "flex", width: "100%", flexDirection: "column", alignItems: "center"}}><Spinner /><p>Loading... Please sign in if you have not signed in yet</p></div>}
            </BrowserRouter>
            
        );
    }
}

export default Home;