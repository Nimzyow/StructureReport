import React from "react";
import {Link} from "react-router-dom"
import * as ROUTES from "../../../Constants/Routes/Routes";
import { defaultProps } from "recompose";

const SignInSignOut = ({authUser}) => (
    authUser ? <SignOut /> : <SignIn />
)

const SignIn = (props) => {
    return(
        <p style={{color:"white"}}><Link >Log in</Link></p>
    )
}

const SignOut = (props) => {
    return (
        <p style={{color:"white"}}><Link onClick={defaultProps.signOut}>Sign out</Link></p>
    )
}

export default SignInSignOut;