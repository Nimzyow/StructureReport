import React from "react";
import {BrowserRouter, Link, withRouter} from "react-router-dom";
import * as ROUTES from "../../../Constants/Routes/Routes";
import { withFirebase } from "../../../Components/FireBase/Index";
import { compose } from 'recompose';
import {auth} from "firebase";


const SignUpPage = (props) => (
    <div>
        <h1 style={{color: "white", fontSize:"large"}}>
            Sign Up
        </h1>
        <SignUpForm />
    </div>
);

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
  };

class SignUpFormBase extends React.Component{
    constructor(props){
        super(props);
        this.state={
            ...INITIAL_STATE
        }
    }

      onSubmitHandler = (event) => {
        console.log("SUBMITTED");
        const {email, passwordOne } = this.state;
        auth().createUserWithEmailAndPassword(email, passwordOne)
        .then(authUser => {
            this.setState({ ...INITIAL_STATE });
            this.props.history.push(ROUTES.HOME);
          })
        .catch(error => {
            this.setState({error})
          });
          event.preventDefault();
      }
        

    onChangehandler = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    render(){
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
          } = this.state;

        const isInvalid = passwordOne !== passwordTwo || passwordOne === "" || passwordTwo === "" || email === "" || username === "";
        return(
                <BrowserRouter>
                    <div>
                        <div>
                            <form style={{display: "flex", flexDirection: "column", width:"400px"}} onSubmit={this.onSubmitHandler}>
                                <input
                                name="username"
                                value={username}
                                onChange={this.onChangehandler}
                                type="text"
                                placeholder="Full Name"
                                />
                                <input
                                name="email"
                                value={email}
                                onChange={this.onChangehandler}
                                type="text"
                                placeholder="Email Address"
                                />
                                <input
                                name="passwordOne"
                                value={passwordOne}
                                onChange={this.onChangehandler}
                                type="password"
                                placeholder="Password"
                                />
                                <input
                                name="passwordTwo"
                                value={passwordTwo}
                                onChange={this.onChangehandler}
                                type="password"
                                placeholder="Confirm Password"
                                />
                                <button disabled={isInvalid} type="submit">Sign Up</button>
                                {error && <p style={{color: "white"}}>{error.message}</p>}
                            </form>
                        </div>
                    </div>
                </BrowserRouter>
        )
    }
}

const SignUpLink = () => (
    <p>
       Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </p>
  );

const SignUpForm = compose(withRouter, withFirebase)(SignUpFormBase);
  
export default SignUpPage;

export {SignUpLink, SignUpForm}