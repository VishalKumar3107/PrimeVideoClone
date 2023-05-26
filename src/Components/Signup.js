import React, { useState } from "react";
import "../allcss/login.css";

import { auth } from "../FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlesignup=(e)=>{
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredentials)=>{
      console.log(userCredentials);
      alert("Sign up successfully")
    })
    .catch((error)=>{
      console.log(error);
    });
  }

  return (
    <div className="loginbox">
      <form onSubmit={handlesignup} class="form">
        <span class="signup">Sign Up</span>
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          class="form--input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          class="form--input"
        />
        <button type="submit" class="form--submit">Sign up</button>
      </form>
    </div>
  );
}

export default Signup;
