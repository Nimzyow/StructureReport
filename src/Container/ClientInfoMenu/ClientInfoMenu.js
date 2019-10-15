import React from "react"
import  "./ClientInfoMenu.css";
import Aux from "../../hoc/Aux";

import { BrowserRouter, Route, Link, Redirect, NavLink  } from "react-router-dom";
import * as ROUTES from "../../Constants/Routes/Routes";

import CustomerInfo from "../ClientProgram/CustomerInfo/CustomerInfo";
import JobAccepted from "../ClientProgram/JobAccepted/JobAccepted";
import Tasks from "../ClientProgram/Tasks/Tasks";
import Completed from "../ClientProgram/Completed/Completed";

class ClientInfoMenu extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            selected1: true,
            selected2: false,
            selected3: false,
            selected4: false
        }
    }

    switchClassHandler1 = () => {
        this.setState({
            selected1: true,
            selected2: false,
            selected3: false,
            selected4: false
        })
    }
    switchClassHandler2 = () => {
        this.setState({
            selected1: false,
            selected2: true,
            selected3: false,
            selected4: false
        })
    }
    switchClassHandler3 = () => {
        this.setState({
            selected1: false,
            selected2: false,
            selected3: true,
            selected4: false
        })
    }
    switchClassHandler4 = () => {
        this.setState({
            selected1: false,
            selected2: false,
            selected3: false,
            selected4: true
        })
    }

    render(){
        return(
            
                <BrowserRouter>
                <div className="MenuWrapper">
                    <div onClick={this.switchClassHandler1} className={!this.state.selected1 ? "CompWrapper" : "CompWrapperSelect"}>
                        <NavLink className="TextProp" to={ROUTES.CUSTOMER_INFO}>
                            Client info
                        </NavLink>
                    </div>
                    <div onClick={this.switchClassHandler2} className={!this.state.selected2 ? "CompWrapper" : "CompWrapperSelect"}>
                        <NavLink className="TextProp" to={ROUTES.JOB_ACCEPTED}>
                            Job accepted
                        </NavLink>
                    </div>
                    <div onClick={this.switchClassHandler3} className={!this.state.selected3 ? "CompWrapper" : "CompWrapperSelect"}>
                        <NavLink className="TextProp" to={ROUTES.TASKS}>
                            Tasks
                        </NavLink>
                    </div>
                    <div onClick={this.switchClassHandler4} className={!this.state.selected4 ? "CompWrapper" : "CompWrapperSelect"}>
                        
                        <NavLink className="TextProp" to={ROUTES.COMPLETED}>
                            Completed
                        </NavLink>
                    </div>
                </div>
                    <Redirect to={ROUTES.CUSTOMER_INFO} />
                    <Route path={ROUTES.CUSTOMER_INFO} component={CustomerInfo} />
                    <Route path={ROUTES.JOB_ACCEPTED} component={JobAccepted} />
                    <Route path ={ROUTES.TASKS} component={Tasks} />
                    <Route path ={ROUTES.COMPLETED} component={Completed} />
                </BrowserRouter>
                
            )
    }
}

export default ClientInfoMenu;