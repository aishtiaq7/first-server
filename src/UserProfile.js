import React, { Component } from "react";
import firebase from "firebase";

class UserProfile extends Component {
    constructor(){
        super();
        this.state ={
            isLoggedIn : false
        }
    }

    componentDidMount() {
        console.log("componentDidMount()");

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                // User logged in already or has just logged in.
                console.log(user.uid);
                this.setState(
                    {isLoggedIn : true}
                );
            } else {
                // User not logged in or has just logged out.
                this.setState(
                    {isLoggedIn : false}
                );
            }
        });
    }

    render() {
        if( this.state.isLoggedIn){
            return<h3>this is user profile</h3>
        }
        else {
            return (<h3>Cant view page cuz you not logged in</h3>)
        }
        
    }
}

export default UserProfile;
