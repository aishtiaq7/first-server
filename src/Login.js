import React, { useRef, useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

import firebase from "firebase";
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

//Firebase AUTH change
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    var uid = user.uid;
    console.log("\tAUTH CHANGE - Signed IN:");
    console.log(uid);

    // ...
  } else {
    console.log("\tAUTH CHANGE - NOTTTT  Signed IN:");
    // User is signed out
    // ...
  }
});

function firebasefunction(email, password) {
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
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    });

  loginPromise.catch((err) => {
    console.log("hey error loggin in");
    console.log(err);
  });
}

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const credentials = useRef({
    email: "defaulut email",
    password: "default password",
  });

  console.log("\n");
//   console.log("re-render");
  console.log("email:", email);
  console.log("password:", password);
  console.log('credendials', credentials.current);

  const handleLogin = () => {
    console.log("email:", email);
    console.log("password:", password);

    credentials.current.email = email;
    credentials.current.password = password;
    console.log(credentials.current);

    setEmail("");
    setPassword("");

    firebasefunction(email, password);
  };

  const handleLogout = () => {
    firebase
        .auth()
        .signOut()
        .then(() => {
            // Sign-out successful.
            console.log('logged out user');
        })
        .catch((error) => {
            // An error happened.
            console.log('error logging out');
            console.log(error);
        });
  };

  return (
    <Container className="mt-5">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          Submit
        </Button>
        <Button
          className="ml-2"
          variant="primary"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            // handleLogin();
            handleLogout();
          }}
        >
          Logout
        </Button>
      </Form>
    </Container>
  );
}
