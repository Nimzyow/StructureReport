import React from "react";
import "./LeftMenu.css";
import Aux from "../../hoc/Aux";
import { Link } from "react-router-dom";
import * as ROUTES from "../../Constants/Routes/Routes";
import Logo from "../../Assets/ce_logo_header.png";


const Navigation = ({authUser}) => (
    <div>{authUser ? <LeftMenuAuth /> : <LeftMenuNotAuth />}</div>
) 

const LeftMenuAuth = (props) => {
    return (
        <Aux>
            <div className="LogoContainer2"> 
              <img style={{width: "295px", height: "52px"}} src={Logo} alt="Logo2"/>              
            </div> 
            <div className="LeftMenu" onClick={props.homeHead}>
                <div className="Posts" >
                    <header >
                        <nav>
                            <Link to={ROUTES.HOME}>
                                <ul >
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
                    <header onClick={props.structureRepHead}>
                        <nav>
                            <Link to={ROUTES.STRUCTURAL_REPORT} onClick={props.structureRepHead}>
                                <ul >
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
                            <Link to={ROUTES.CLIENT_PROGRAM} onClick={props.topHeader}>
                                <ul>
                                    <li>
                                        Client Program
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
                            <Link to={ROUTES.PATCH_NOTES} onClick={props.topHeader}>
                                <ul>
                                    <li>
                                        Patch Notes
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
        <Aux>
            <div className="LogoContainer2"> 
                <img style={{width: "295px", height: "52px"}} src={Logo} alt="Logo2"/>              
            </div> 
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
        </Aux>
    )
}

export default Navigation;