import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

function Signup({ email, setEmail, password, setPassword, error, setError }) {
  // intial state of user email and password
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [error, setError] = useState("");
  const { signUp } = useUserAuth();
  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/login");
    } catch (err) {
      setError(err.message);
      // alert(err.message);
    }
  };
  // prop types
  // password show and hide functionality
  const [passwordshown, setPasswordshown] = useState(false);
  const togglepassword = () => {
    // inverse the boolean state of passwordshown
    setPasswordshown(!passwordshown);
  };
  return (
    <>
      <form id="formformat" className="ui fluid form" onSubmit={handlesubmit}>
        <button id="signup-form" className="ui primary button">
          SignUp Form
        </button>
        <div className="ui divider"></div>
        <p className="err-msg">{error}</p>
        <div className="ui divider"></div>
        <div className="inline field">
          <div id="email-label" className="ui right pointing red basic label">
            Enter Email:
          </div>
          <input
            id="email-input"
            type="email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="ui divider"></div>
        <div className="inline field">
          <div id="pass-label" className="ui right pointing red basic label">
            Enter Password:
          </div>
          <div className="input-pass-icon">
            <input
              id="password-input"
              type={passwordshown ? "text" : "password"}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <i id="show-off" className="eye icon" onClick={togglepassword}></i>
          </div>
        </div>
        <div className="ui divider"></div>
        <button id="submit-login" className="ui inverted blue button">
          Sign Up
        </button>
        <div className="ui divider"></div>
        <div className="button-account">
          Already have an account ?..
          <span className="sign-in">
            <Link to="/login"> Log In</Link>
          </span>
        </div>
      </form>
    </>
  );
}

export default Signup;
