import React from "react";
import "./Report.css";

const Report = (props) => {
    return (
        <div className="ReportHeader">
            <n>Structural Report</n>
            <p>{props.year}</p>
            <p>At</p>
            <n>{props.numberAndStreet}</n>
            <n>{props.addSecond}</n>
            <n>{props.addThird}</n>
            <p>{props.addPC}</p>
            <n>Prepared by</n>
            <n>Dr E.G Soufiani {'\n'} (BSc. (Civil/Structural Engineer), MSc. Ph.D.</n>
            <n>Structural Engineer and Environment Engineer</n>
            <n>CIVIL Engineering LTD</n>
            <n>22 Kingswood Road</n>
            <n>Ilford</n>
            <n>Essex</n>
            <n>IG3 8UE</n>
            <n>Tel: 020 8598 1998</n>
        </div>
    )
};

export default Report;