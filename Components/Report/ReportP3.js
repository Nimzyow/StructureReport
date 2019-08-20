import React from "react";
import "./Report.css";

const ReportP3 = (props) => {
    const borderStyle = {
        //border: "1px solid black",
        color: "black",
        marginTop: "13%",
        marginLeft: "5%",
        fontFamily: "Arial",
        fontSize: "12px"
      };
    return (
        <div>
        <div style={borderStyle}>
            <p>1.0 AUTHORITY AND SCOPE OF STRUCTURAL INSPECTION</p>
        </div>    
        <div className="NormalBody">
            <div>
            <p>1.1	Civil Engineers Ltd were instructed by Ms Kerry O’Sullivan to undertake an inspection of a bungalow house, “35 Barley Lane, Ilford, Essex, IG3 8XE”, in relation to cracking that was noted on external and internal walls.</p>
            <p>1.2	Our inspection was carried out on 4th July 2019 on the bases of visual; non-instructive and non-destructive survey of the property to assess its probable structural integrity and report of any defect considered being of significance and possible cause, if present.</p>
            <p>1.3	No boreholes or trial pits were excavated at the time of our inspection to determine the nature or condition of the subsoils.</p>
            <p>1.4	The report is the property of Civil Engineers Ltd and is confidential to the client designated in the report. Whilst it may be shown to their professional advisors, the comments are not to be disclosed to, or made use of by any third party without our express written consent. Without such consent we can accept no responsibility to any third party.</p>
            <p>1.5	Whilst every effort will be made to fully inspect those parts of the building requested of us, no permanent or secured fixture and fittings will be removed. We did not inspect parts of the structure which covered unexposed or inaccessible and we will be unable to report that any such part of the property is free from defect.</p>
            <p>1.6	Civil Engineers Ltd will certify that they carried out the works contained in the report with due care and diligence to their best belief and knowledge based on the time and information available.</p>
            <p>1.7	This report is made on behalf of Civil Engineers Ltd. By receiving it and acting on it, the client or any third party relying on it – accepts that no individual is personally liable in contract, tort or breach of statutory duty (including negligence).</p>
            <p>1.8	The weather at the time of structural survey was good, dry and bright.</p>
            <p>1.9	All directions given in this report assume that one is stood facing the front of the property from the road. That is:</p>
            <n>a)	Front elevation means the view of the building from the road.</n>
            <n> b)	Rear elevation means the view of the building from the rear garden.</n>
            
            </div>
        </div>
        </div>
    )
};

export default ReportP3;