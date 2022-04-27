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

  // password show and hide functionality
  const [passwordshown, setPasswordshown] = useState(false);
  const togglepassword = () => {
    // inverse the boolean state of passwordshown
    setPasswordshown(!passwordshown);
  };
  return (
    <>
      <form id="formformat" className="ui fluid form" onSubmit={handlesubmit}>
        <button id="signup-button" className="ui primary button">
          SignUp Form
        </button>
        <div className="ui divider"></div>
        <p className="err-msg">{error}</p>
        <div className="ui divider"></div>
        <div className="inline field">
          <div id="email-label" className="ui right pointing red basic label">
            That Email is taken!
          </div>
          <input
            id="email-input"
            type="email"
            placeholder="Email"
            required
            // value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="ui divider"></div>
        <div className="inline field">
          <div className="ui right pointing red basic label">
            Your password must be 6 characters or more
          </div>
          <input
            id="password-input"
            type={passwordshown ? "text" : "password"}
            required
            // value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="ui inverted violet button"
            onClick={togglepassword}
          >
            <i className="eye icon"></i>Show
          </button>
        </div>
        <div className="ui divider"></div>
        <button id="submit-login" className="ui inverted purple button">
          Sign Up
        </button>
        <div className="ui divider"></div>
        <div className="button-center">
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
