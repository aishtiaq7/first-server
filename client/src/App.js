import "./App.css";
import { React, useRef, useEffect, useState } from "react";
import firebase from "firebase";

import Login from "./Login";

var firebaseConfig = {
  apiKey: "AIzaSyD046QyLkn90eFMNwV1mhWhC-hw_6RhQuY",
  authDomain: "first-server-auth.firebaseapp.com",
  projectId: "first-server-auth",
  storageBucket: "first-server-auth.appspot.com",
  messagingSenderId: "692608182980",
  appId: "1:692608182980:web:3f5a2509c511cdf36bb791",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default function App() {
  return <Login />;
}

function firebasefunction(email,password) {
  const loginPromise = firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log("..signed in with:");
      console.log(user);
      return userCredential;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  loginPromise.then((res) => {
    console.log("signed in THEN");
    console.log(res);
    return res;
  });

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      console.log("\tSigned IN:");
      console.log(uid);
      // ...
    } else {
      console.log("\tNOTTTT  Signed IN:");
      // User is signed out
      // ...
    }
  });
}
