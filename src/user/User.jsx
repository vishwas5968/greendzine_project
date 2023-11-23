import React, { useState } from "react";
import customer from "../images/Group 46.png";
import moptpro from "../images/moptro logo.png";
import { ImHome } from "react-icons/im";
import { FaUser } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import info from "./users.json";
import { Link, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Footer from "../Footer";

const User = () => {
  const [first, setfirst] = useState(info);
  const [last, setlast] = useState(true);

  return (
    <div className="user">
      <div className="customer">
        {/* <div></div> */}
        <img src={customer} alt="" />
      </div>
      <div className="mop">
        <img src={moptpro} alt="" />
        <div>4</div>
      </div>
      {/* <div></div> */}
      <div className="search">
        <input type="text" name="" id="" placeholder="Search with name" />
        <IoMdSearch className="searches" />
      </div>
      <div className="card">
        {first.map((e) => {
          return (
            <div className="cards">
              <div className="info">
                <p>EMP ID : {e.emp_id}</p>
                <p>Name : {e.name}</p>
                <p>
                  DOB : <span className="orange">{e.dob}</span>
                </p>
                <p>
                  Role : <span className="green">{e.role}</span>
                </p>
              </div>
              <div className="empid">{e.emp_id}</div>
            </div>
          );
        })}
      </div>
      {/* <Footer /> */}
      {/* <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/user" element={<User />}></Route>
      </Routes> */}
    </div>
  );
};

export default User;
