import React, { useState } from "react";
import {signInWithEmailAndPassword} from "firebase/auth"
import "../allcss/login.css";
import { auth } from "../FirebaseConfig";
import { useNavigate } from "react-router-dom";

function Signin() {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlesigin=(e)=>{
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredentials)=>{
      console.log(userCredentials);
      nav("/")
    })
    .catch((error)=>{
      console.log(error);
    });
  }
  return (
    <div className="loginbox">
      <form onSubmit={handlesigin} class="form">
        <span class="signup">Sign In</span>
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          class="form--input"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          class="form--input"
        />
        <button type="submit" class="form--submit">Sign in</button>
      </form>
    </div>
  );
}

export default Signin;
