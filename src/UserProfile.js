import React, { Component } from "react";
import firebase from "firebase";

class UserProfile extends Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: false,
            uid:''
        };
    }

    componentDidMount() {
        console.log("componentDidMount()");

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                // User logged in already or has just logged in.
                console.log(user.uid);
                this.setState({ isLoggedIn: true });
                this.setState({ uid: user.uid });
            } else {
                // User not logged in or has just logged out.
                this.setState({ isLoggedIn: false });
                this.setState({ uid: '' });

            }
        });
    }

    render() {
        if (this.state.isLoggedIn) {
            return <h3>{this.state.uid}</h3>;
        }
        return <h3>{'null'}</h3>;
    }
}

export default UserProfile;
