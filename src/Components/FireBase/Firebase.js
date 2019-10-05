import app from "firebase/app"
import "firebase/auth";

const config = {
    apiKey: "AIzaSyCnX8bAPji2NJKSQKsNl7J5zzTem1AkQ8A",
    authDomain: "clientinfo-bfb1b.firebaseapp.com",
    databaseURL: "https://clientinfo-bfb1b.firebaseio.com",
    projectId: "clientinfo-bfb1b",
    storageBucket: "",
    messagingSenderId: "784146652289",
    appId: "1:784146652289:web:ca3067be8d296dbef94180",
    measurementId: "G-90NKCYST40"
}

class Firebase{
    constructor(){
        app.initializeApp(config);

        this.auth = app.auth();
    }
    // *** Auth API ***

    doCreateUserWithEmailAndPassword = (email, password) => {
        this.auth.createUserWithEmailAndPassword(email, password);
        
    }

    doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
    
    doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
}

    

export default Firebase;