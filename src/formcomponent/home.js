import React from "react";
import "./home.css";
// import { Link } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

function Home() {
  const { user, logOut } = useUserAuth();

  const handlelogout = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <h1 className="home-content">Welcome, you are in Home page</h1>
      <p className="home-content">{user && user.email}</p>
      <button
        id="submit-login"
        className="ui inverted teal button"
        onClick={handlelogout}
      >
        {/* <Link to="/"> */}
        Log Out
        {/* </Link> */}
      </button>
    </>
  );
}

export default Home;
