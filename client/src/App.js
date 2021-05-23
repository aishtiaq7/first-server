import "./App.css";
import { React, useRef, useEffect, useState } from "react";

import Login from "./Login";

export default function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = ()=>{
      console.log('email:', email);
      console.log('password:', password);
  }

  return <Login email={email} password={password} handleLogin={handleLogin} setEmail={setEmail} setPassword={setPassword} />;
}
