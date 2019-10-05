import React from "react";
import "../Report/HeaderReport.css";
import logo from "../../Assets/ce_logo_header.png";

const HeaderReport = (props) => {
    const borderStyle = {
        width: "245px",
      };
    return (
        <div className="HeaderContainer">
            <div className="ClientAddContainer">
                <n>STRUCTURAL REPORT AT:</n>
                <n>{props.streetAndNum + ", " + props.addSecond + ", " + props.addThird + ", " + props.addPc}</n>
                <n>Project No: {props.pNum}</n>
            </div>
            <div className="LogoContainerHeader">
                <img style={borderStyle} src={logo} alt="Logo2"/>
            </div>
            </div>
    )
};

export default HeaderReport;