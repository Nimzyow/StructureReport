import React from "react";
import "./ButtonSave.css";
import {Button} from "react-bootstrap";

const ButtonSave = (props) => {
    return (
        
            <Button disabled={props.isInvalid} className="ButtonControl" variant="primary" size="lg" block onClick={props.onClick} >
                Save Customer Info
            </Button>
        
    )
};

export default ButtonSave;