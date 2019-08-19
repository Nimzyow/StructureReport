import React from "react";
import "./DropDown.css";

import { DropdownButton, Dropdown } from "react-bootstrap";

const DropDown = (props) => {
    return (
        <DropdownButton id="dropdown-item-button" title={props.title}>
            <Dropdown.Item as="button">Action</Dropdown.Item>
            <Dropdown.Item as="button">Another action</Dropdown.Item>
            <Dropdown.Item as="button">Something else</Dropdown.Item>
        </DropdownButton>
    )
};

export default DropDown;