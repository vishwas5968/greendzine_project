import React, { useRef, useState } from "react";
import logo from "./images/Group 3.png";
import Home from "./Home/Home";
import User from "./user/User";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Layout from "./Layout";

const App = () => {
  let mail = useRef();
  let password = useRef();
  const [first, setfirst] = useState(false);
  let check = () => {
    if (
      mail.current.value === "abc@gmail.com" &&
      password.current.value === "Qwerty"
    ) {
      setfirst(!first);
    }
  };

  return (
    <div className="login" style={{ display: first ? "none" : "visible" }}>
      <div className="logo">
        <img src={logo} alt={logo} />
        <p>#We are Electric</p>
      </div>
      <div className="mail forgot">
        <input type="text" placeholder="E-mail" ref={mail} />
        <input type="password" placeholder="Password" ref={password} />
      </div>
      <Router>
        <Layout/>
        <Routes>
          <Route path="/Home" element={!first ? <Home /> : null} />
        </Routes>
      </Router>

      {/* <Home status={first} /> */}
      <div className="forgot"></div>
      {/* <Home /> */}
      {/* <User /> */}
    </div>
  );
};

export default App;
