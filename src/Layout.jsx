import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home/Home";

const Layout = (props) => {
  // const change = () => {
  //   document.getElementsByClassName("links").display = "none";
  // };
  return (
    <div>
      <div className="log">
        <button>
          <Link className="links" to="/Home">
            Login
          </Link>
        </button>
        <button>Forgot Password?</button>
      </div>
    </div>
  );
};

export default Layout;
