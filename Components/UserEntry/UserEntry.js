import React from "react";
import {  InputGroup, FormControl } from "react-bootstrap";

const UserInput = (props) => {
    
    return (
        <InputGroup size="sm" className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-sm">{props.leftPC}</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl value={props.value} aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={props.onChange}/>
        </InputGroup>
    )
};

export default UserInput;