import React from "react";
import "./Report.css";

const ReportP2 = (props) => {
    const borderStyle = {
        //border: "1px solid black",
        color: "black",
        marginTop: "8%",
        marginLeft: "5%",
        fontFamily: "Arial",
        fontSize: "12px"
      };
    return (
        <div>
        <div style={borderStyle}>
            <p>TABLE OF CONTENTS</p>
        </div>    
        <div className="TableContents">
            <div>
            <p>1- AUTHORITY AND SCOPT OF STRUCTURAL INSPECTION FINDINGS</p>
            <p>2- OBSERVATION & DESCRIPTION</p>
            <p>3- FINDINGS</p>
            <p>4- DISCUSSION & RECOMMENDATIONS</p>
            <p>5- AN APPROXIMATE COST OF THE REMEDIAL WORK (STRUCTURAL)</p>
            <p>6- APPENDIX A (Photos)</p>
            </div>
        </div>
        </div>
    )
};

export default ReportP2;