import React from 'react';
import { withFirebase } from "../../../Components/FireBase/Index";

const SignOutButton = (props) => (
  <button type="button" onClick={props.clicked}>
    Sign Out
  </button>
);
export default withFirebase(SignOutButton);