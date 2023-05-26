import React, { useState } from "react";
import "../allcss/Authenticate.css"
import Login from "../Components/Signin";
import Signup from "../Components/Signup";
import Signin from "../Components/Signin";

function Authenticate() {
  const [showLogin, setShowLogin] = useState(true);

  const handleButtonClick = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="Authenticate">
        <h1>prime video clone</h1>
      <div className="Authenticate-box">
      {showLogin ? <Signin /> : <Signup />}
      <div className="Authenticate-terms">
      By continuing, you agree to the Amazon <span>Conditions of Use and Privacy Notice.</span>
      </div>
      <div class="form--marketing">
        <input id="okayToEmail" type="checkbox" />
        <label for="okayToEmail" class="checkbox">
          {showLogin ? "Keep me signed in" : "Terms and conditions"}
        </label>
      </div>
      <button className="Authenticate-box button" onClick={handleButtonClick}>
        {showLogin ? "Create your Amazon account" : "Already have a account? Signin"}
      </button>
      </div>
      <div className="border-bottom-auth"/>
    </div>
  );
}

export default Authenticate;
