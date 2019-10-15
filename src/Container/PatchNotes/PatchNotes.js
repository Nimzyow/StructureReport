import React from "react"
import "./PatchNotes.css";
import Aux from "../../hoc/Aux";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import 'typeface-roboto';
import ClientInfo from "../ClientProgram/CustomerInfo/CustomerInfo";

class PatchNotes extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            checked: true
        }
    }

    handleChange = () => {
        this.state.checked ? this.setState({checked: false}, () => console.log("log status: "+this.state.checked)) : this.setState({checked: true}, () => console.log("log status: "+this.state.checked))
    }
    render(){
        return(
            <Aux>
                <div style={{display: "flex", marginLeft:"3%", marginRight:"3%", justifyContent: "flex-start", borderBottom:"1px solid #C3CFDD"}}>
                    <h1 style={{color:"#1A3957", fontWeight:"400" }}>Patch notes</h1>
                </div>
                <div className={"Main"}>
                    <div>
                        <p>05/10/2019</p>
                        <div className={"PatchLayout"}>
                        <text>* Added patch notes</text>
                        <text>* UI changes in ClientData</text>
                        </div>
                    </div>
                    
                    <FormControlLabel
                    control={<Switch checked={this.state.checked} onChange={this.handleChange} value="gilad" />}
                    label="Job accepted?" labelPlacement="start"
                    />
                </div>

                <ClientInfo />
                
            </Aux>
        )
    }

}

export default PatchNotes; 