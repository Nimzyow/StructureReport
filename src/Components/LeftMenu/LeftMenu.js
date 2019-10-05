import React from "react";
import "./LeftMenu.css";
import Aux from "../../hoc/Aux";
import { Link } from "react-router-dom";
import * as ROUTES from "../../Constants/Routes/Routes";

const Navigation = ({authUser}) => (
    <div>{authUser ? <LeftMenuAuth /> : <LeftMenuNotAuth />}</div>
) 

const LeftMenuAuth = (props) => {
    return (
        <Aux>
            <div className="LeftMenu">
                <div className="Posts">
                    <header >
                        <nav>
                            <Link to={ROUTES.HOME} onClick={props.topHeader}>
                                <ul>
                                    <li>
                                        Home
                                    </li>
                                </ul>
                            </Link>
                        </nav>
                    </header>
                </div>
            </div>
            <div className="LeftMenu">
                <div className="Posts">
                    <header >
                        <nav>
                            <Link to={ROUTES.STRUCTURAL_REPORT} onClick={props.topHeader}>
                                <ul>
                                    <li>
                                        Structural Report (under development)
                                    </li>
                                </ul>
                            </Link>
                        </nav>
                    </header>
                </div>
            </div>
            <div className="LeftMenu">
                <div className="Posts">
                    <header >
                        <nav>
                            <Link to={ROUTES.CUSTOMER_INFO} onClick={props.topHeader}>
                                <ul>
                                    <li>
                                        Client Info
                                    </li>
                                </ul>
                            </Link>
                        </nav>
                    </header>
                </div>
            </div>
            <div className="LeftMenu">
                <div className="Posts">
                    <header >
                        <nav>
                            <Link to={ROUTES.CALCULATION_REPORT} onClick={props.topHeader}>
                                <ul>
                                    <li>
                                        Calculation Report
                                    </li>
                                </ul>
                            </Link>
                        </nav>
                    </header>
                </div>
            </div>
        </Aux>
    )
};

const LeftMenuNotAuth = (props) => {
    return(
        <div className="LeftMenu">
                <div className="Posts">
                    <header >
                        <nav>
                            <Link to={ROUTES.SIGN_IN} onClick={props.topHeader}>
                                <ul>
                                    <li>
                                        Login
                                    </li>
                                </ul>
                            </Link>
                        </nav>
                    </header>
                </div>
            </div>
    )
}

export default Navigation;