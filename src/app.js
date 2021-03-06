import React, { useState } from "react";
// import PropTypes from "prop-types";
import Signup from "./formcomponent/signup";
import Login from "./formcomponent/login";
import "./formcomponent/signup.css";
import { Routes, Route } from "react-router-dom";
import { UserAuthdata } from "./context/UserAuthContext";
import Home from "./formcomponent/home";
import Protectedroute from "./formcomponent/protectedroute";

function App() {
  // intial state of user email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // props-types
  // App.PropTypes={
  //   email : PropTypes.isRequired,
  //   setEmail : PropTypes.isRequired,
  //   password: PropTypes.number,
  //   setPassword: PropTypes.number,
  //   error : PropTypes.string,
  //   setError : PropTypes.string
  // }

  return (
    <>
      <UserAuthdata>
        <Routes>
          <Route
            path="/home"
            element={
              <Protectedroute>
                <Home />
              </Protectedroute>
            }
          />
          <Route
            exact
            path="/"
            element={
              <Signup
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                error={error}
                setError={setError}
              />
            }
          />
          <Route
            path="/login"
            element={
              <Login
              // email={email}
              // setEmail={setEmail}
              // password={password}
              // setPassword={setPassword}
              // error={error}
              // setError={setError}
              />
            }
          />
        </Routes>
      </UserAuthdata>
    </>
  );
}

export default App;
