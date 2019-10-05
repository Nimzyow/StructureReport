import React from "react";
import { withRouter } from 'react-router-dom';
import { withFirebase } from "../../../Components/FireBase/Index";
import { compose } from 'recompose';
import {auth} from "firebase";

import * as ROUTES from "../../../Constants/Routes/Routes";
import Aux from "../../../hoc/Aux";
import Spinner from "../../../Components/Spinner/Spinner";

const SignInPage = () => (
    <div style={{display: "flex", flexDirection:"column", alignItems: "center", width: "100%", }}>
        <div style={{marginTop:"2%"}}>
            <h1 style={{color: "white", fontSize:"large"}}>SignIn</h1>
        </div>
        <SignInForm />
    </div>
  );

  const INITIAL_STATE = {
    email: "",
    password: "",
    error: null,
  };

class SignInFormBase extends React.Component{
    constructor(props){
        super(props);
        this.state={
            ...INITIAL_STATE, spinner: false
        }
    }

    onSubmitHandler = (event) => {
        this.setState({spinner: true})
        console.log("LOGIN SUBMITTED");
        const { email, password } = this.state;
        auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            this.setState({ ...INITIAL_STATE, spinner: false });
            this.props.history.push(ROUTES.HOME);
          })
        .catch((error) => {
            // Handle Errors here.
            this.setState({ error, spinner: false });
          });
          event.preventDefault();
    }

    onChangehandler = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    render(){
        const { email, password, error } = this.state;

        const isInvalid = password === '' || email === '';
        return(
                <Aux>
                    <div style={{marginTop:"3%"}}>
                        <form style={{display: "flex", flexDirection: "column", width:"400px"}} onSubmit={this.onSubmitHandler}>
                            <input
                            name="email"
                            value={email}
                            onChange={this.onChangehandler}
                            type="text"
                            placeholder="Email Address"
                            />
                            <input
                            name="password"
                            value={password}
                            onChange={this.onChangehandler}
                            type="password"
                            placeholder="Password"
                            />
                            <button disabled={isInvalid} type="submit">
                            Sign In
                            </button>
                            {error && <p>{error.message}</p>}
                        </form>
                    </div>
                    
                    { this.state.spinner && <Spinner />}
                    
                </Aux>
        )
    }
}

const SignInForm = compose(
    withRouter,
    withFirebase,
  )(SignInFormBase);

  export default SignInPage;

  export { SignInForm };