import React from "react";
import customer from "../images/Group 46.png";
import moptpro from "../images/moptro logo.png";
import { Link, Routes, Route, BrowserRouter } from "react-router-dom";
import { ImHome } from "react-icons/im";
import { FaUser } from "react-icons/fa";
import Footer from "../Footer";
import User from "../user/User";

const Home = (props) => {
  return (
    <div
      className="home"
      // style={{ visibility: props.status ? "visible" : "hidden" }}
    >
      <div className="customer">
        <img src={customer} alt="" />
      </div>
      <div className="mop">
        <img src={moptpro} alt="" />
        <div>4</div>
      </div>
      <div>
        <div className="drop">
          <div className="emp">
            <p>Employee Productivity Dashboard</p>
          </div>
          <div>
            <div className="monday day">
              <p>Productivity on Monday</p>
              <p>4%</p>
            </div>
            <div className="green1 load"></div>
          </div>
          <div>
            <div className="monday day">
              <p>Productivity on Tuesday</p>
              <p>92%</p>
            </div>
            <div className="green2 load"></div>
          </div>
          <div>
            <div className="monday day">
              <p>Productivity on Wednesday</p>
              <p>122%</p>
            </div>
            <div className="green3 load"></div>
          </div>
          <div>
            <div className="monday day">
              <p>Productivity on Thursday</p>
              <p>93%</p>
            </div>
            <div className="green4 load"></div>
          </div>
          <div>
            <div className="monday day">
              <p>Productivity on Friday</p>
              <p>89%</p>
            </div>
            <div className="green5 load"></div>
          </div>
          <div>
            <div className="monday day">
              <p>Productivity on Saturday</p>
              <p>98%</p>
            </div>
            <div className="green6 load"></div>
          </div>
        </div>
      </div>
      {/* <BrowserRouter> */}
      <Footer />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/user" element={<User />}></Route>
      </Routes>
      {/* </BrowserRouter> */}
    </div>
  );
};

export default Home;
