import React from "react"
import "./PatchNotes.css";
import Aux from "../../hoc/Aux";

class PatchNotes extends React.Component{
    render(){
        return(
            <Aux>
                <div style={{display: "flex", marginLeft:"3%", marginRight:"3%", justifyContent: "flex-start", borderBottom:"1px solid #C3CFDD"}}>
                    <h2 style={{color:"#1A3957", font: "large", fontfamily: "Arial, Helvetica, sans-serif" }}>Patch notes</h2>
                </div>
                <div className={"Main"}>
                    <div>
                        <p>05/10/2019</p>
                        <div className={"PatchLayout"}>
                        <text>* Added patch notes</text>
                        <text>* UI changes in ClientData</text>
                        </div>
                    </div>
                </div>
            </Aux>
        )
    }

}

export default PatchNotes; 