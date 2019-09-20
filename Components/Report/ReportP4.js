import React from "react";
import "./Report.css";

const ReportP4 = (props) => {
    const borderStyle = {
        //border: "1px solid black",
        color: "black",
        marginTop: "3%",
        marginLeft: "5%",
        fontFamily: "Arial",
        fontSize: "12px"
      };
      const borderStyleNotTop = {
        //border: "1px solid black",
        color: "black",
        marginLeft: "5%",
        fontFamily: "Arial",
        fontSize: "12px"
      };
    return (
        <div>
        <div style={borderStyle}>
        <p>2.0	OBSERVATION & DESCRIPTION</p>
        </div>    
        <div className="NormalBody">
            <div>
                <p>2.1	The property comprises of two floors, two storey bungalow house likely to have been built in the early 1930’s</p>
                <p>2.2	The footprint of the house comprises of the main ground floor house with side accesses to the rear garden. The roof over the main house is a gable-end pitched roof with a loft habitable room plus a bathroom in the loft.</p>
                <p>2.3	The construction of the building is load bearing masonry external walls with a load bearing internal spine walls.</p>
                <p>2.4	The outside walls of the property are built of full brickworks. The roof is built of timber and concrete tiles. The ground floor and first floor are suspended timber floor joists and the ceiling to loft is built of timber ceiling joists.</p>
                </div>
                </div>
            <div style={borderStyleNotTop}>
                <p>3.0	FINDINGS</p>
            </div>
            <div className="NormalBody">
                <div>
            <p>3.1	Surrounding trees were noted to the left, right and rear of the building; there is a Palm tree within 3m of the front of the property, within zoon of influence but no tree root effect has been noted to the building.</p>
            <p>3.2	We have studied the geological map of the area which indicates that the property is founded on superficial deposits of Ilford Silt Member (clay And Silt). These superficial deposits formed up to 2 million years ago in the Quaternary Period. Local environment previously dominated by wind-blown deposits and aeolian in origin. They are detrital, comprising medium- to fine- grained materials, forming lenses, beds (and locally) dunes. This superficial deposit sits on bedrock of London Clay Formation (Clay, Silt and Sand). This sedimentary Bedrock formed approximately 48 to 56 million years ago in the Palaeogene Period. Local environment previously dominated by deep seas. Clay subsoil is susceptible to problems associated with seasonal movement with shallow foundations which do not extend below the affected clay layers. This can be determined as future problem if the trees within the zoon of influence are left unchecked, since the type of foundation for these type of building should be shallow in depth.</p>
            <p>3.3	No significant structural defect has been noted to the front elevation; however the front elevation brickworks are rendered and as there is no internal crack on this wall, therefore, I can confirm that there is no significant structural deficiency to the front elevation (Reference: Appendix A: Photos 1, 2 and 3)</p>
            <p>3.4	Structural cracks were found to the rear and side elevation (Reference: Appendix A: Photos 5 and 6).</p>
            
            </div>
        </div>
        </div>
    )
};

export default ReportP4;