import React from "react";
import "./LeftMenu.css";
import { Link } from "react-router-dom";

const LeftMenu = (props) => {
    return (
        <div className="LeftMenu">
            <div className="Posts">
                <header>
                    <nav>
                        <ul>
                            <li><Link to={props.href} onClick={props.topHeader}>{props.title}</Link></li>
                        </ul>
                    </nav>
                </header>
            </div>
        </div>
    )
};

export default LeftMenu;