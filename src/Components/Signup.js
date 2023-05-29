import React, { useState } from "react";
import "../allcss/login.css";

import { auth } from "../FirebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] =useState("");
  const nav=useNavigate();

  const handlesignup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        updateProfile(user, { displayName: displayName })
          .then(() => {
            console.log("Display name updated successfully");
            alert("Sign up successfully");
            nav("/");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  

  return (
    <div className="loginbox">
      <form onSubmit={handlesignup} class="form">
        <span class="signup">Sign Up</span>
        <input
          type="displayName"
          placeholder="User Name"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          class="form--input"
        />
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
