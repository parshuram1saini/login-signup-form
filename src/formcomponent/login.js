import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import "./login.css";

function Login() {
  // { email, setEmail, password, setPassword, error, setError }
  // intial state of user email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // console.log(email, password);
  const { logIn } = useUserAuth();
  const navigate = useNavigate();

  // handlesubmit functionlity
  const handlesubmit = async (e) => {
    console.log("tygujhjhh");
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);

      navigate("/home");
    } catch (err) {
      setError(err.message);
      // alert(err.message);
    }
  };

  return (
    <>
      <form className="login-form">
        <p className="err-msg">{error}</p>
        <div className="ui placeholder segment">
          <div className="ui two column very relaxed stackable grid">
            <div className="column">
              <div className="ui form">
                <div className="field">
                  <label>Email</label>
                  <div className="ui left icon input">
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <i className="user icon"></i>
                  </div>
                </div>
                <div className="field">
                  <label>Password</label>
                  <div className="ui left icon input">
                    <input
                      type="password"
                      required
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <i className="lock icon"></i>
                  </div>
                </div>
                <div className="ui blue submit button" onClick={handlesubmit}>
                  Login
                </div>
              </div>
            </div>
            <div className="middle aligned column">
              <div className="ui big button">
                <div>Don't have account ..</div>
                <i className="signup icon"></i>
                <Link to="/">Sign Up</Link>
              </div>
            </div>
          </div>
          <div className="ui vertical divider">Or</div>
        </div>
      </form>
    </>
  );
}

export default Login;
