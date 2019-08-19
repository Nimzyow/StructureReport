import React from "react";
import "./LeftMenu.css";

const LeftMenu = (props) => {
    return (
        <div className="LeftMenu">
            <p className="LeftMenuText">
                {props.title} </p>
        </div>
    )
};

export default LeftMenu;