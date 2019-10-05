import React from "react";
import "./Report.css";

const ReportP5 = (props) => {
    const borderStyle = {
        //border: "1px solid black",
        color: "black",
        marginTop: "5%",
        marginLeft: "5%",
        fontFamily: "Arial",
        fontSize: "12px"
      };
    return (
        <div>   
            <div className="NormalBody">
                <div>
                    <p>3.5	There are number of insignificant historic hair line cracks and minor joint separation or wall paper joint separation around inside of the building (reference Appendix A photograph 7, 8, 9 and 10)</p>
                </div>
            </div>
            <div style={borderStyle}>
                <p>4.0	DISCUSSION & RECOMMENDATIONS</p>
            </div>
            <div className="NormalBody">
                <div>
                    <p>4.1	The building generally appears to be structurally in sound condition with no significant signs of distortion or major foundation movement or subsidence.</p>
                    <p>4.2	There seem to be no renovation-work done to this property for a long time. Therefore, this property is potentially in need of extensive renovation. Hence, in case of any maintenance work, the repair of the structural cracks should be part of the renovation.</p>
                    <p>4.3	Evidence of the movement of the building and rear external structural cracks are deemed to be long standing, historic. However, some cracks do penetrate to the inside thickness of the wall and they have to be repaired to prevent draft and damp coming into the building.</p>
                </div>
            </div>
            <div style={borderStyle}>
                <p>5.0	AN APPROXIMATE COST OF THE STRUCTURAL REMEDIAL WORK</p>
            </div>
            <div className="NormalBody">
                <div>
                    <p>5.1	Builder’s charge for replacement of at least one lintels and repair of the cracks with Heli-bars and resin bond to limit the risk of further movement & finishing £3,500</p>
                    <p>5.2	Structural engineer’s fee to monitor the repair of the structural work and to provide “Certificate of satisfactory completion” of the work: £1250</p>
                    <p>5.3	Therefore; the total approximate cost of the structural remedial work=£4,750+vat</p>   
                </div>
            </div>
        </div>
    )
};

export default ReportP5;